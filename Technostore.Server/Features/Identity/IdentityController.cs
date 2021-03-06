

using Microsoft.AspNetCore.Authorization;
using Technostore.Server.Infrastructure.Extensions;

namespace Technostore.Server.Features.Identity
{
    using Models;
    using Data.Models;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.Extensions.Options;
    using Microsoft.AspNetCore.Http;

    public class IdentityController : ApiController
    {

        private readonly UserManager<User> userManager;
        private readonly IIdentityService identityService;
        private readonly AppSettings appSettings;

        

        public IdentityController(UserManager<User> userManager,
            IIdentityService identityService,
            IOptions<AppSettings> appSettings)
        {
            this.userManager = userManager;
            this.identityService = identityService;
            this.appSettings = appSettings.Value;
        }

        [HttpPost]
        [Route(nameof(Register))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult> Register(RegisterUserRequestModel model)
        {
            var user = new User
            {
                Email = model.Email,
                UserName = model.UserName,
                Name = model.Name,
                Country = model.Country,
                City = model.City,
                Address = model.Address,
                Avatar = model.Avatar,
                Role = model.Role
            };
            var result = await userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                return Ok();
            }

            return BadRequest(result.Errors);
        }

        [HttpPost]
        [Route(nameof(Login))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<LoginResponseModel>> Login(LoginRequestModel model)
        {
            var user = await this.userManager.FindByNameAsync(model.UserName);
            if (user == null)
            {
                return this.Unauthorized();
            }

            var passwordValid = await this.userManager.CheckPasswordAsync(user, model.Password);

            if (!passwordValid)
            {
                return this.Unauthorized();
            }


            var token = identityService.GenerateJwtToken(
                user.Id, 
                user.UserName, 
                this.appSettings.Secret,
                user.Role);

            var adminToken = "";

            if (user.Role == "Admin")
            {
                adminToken = identityService.GenerateAdminToken(user.Id, user.UserName, this.appSettings.Secret);
            }



            return new LoginResponseModel()
            {
                Token = token,
                AdminToken = adminToken
            };
        }

        [HttpGet]
        [Route(nameof(Details))]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<UserDetailsModel>> Details()
        {
            var id = this.User.GetId();

            var user = await this.identityService.GetUser(id);

            return user;
        } 

        [HttpPut]
        [Route(nameof(Update))]
        [Authorize]
        public async Task<ActionResult> Update(UpdateUserRequestModel model)
        {
            var userId = this.User.GetId();

            var updated = await this.identityService.EditUser(userId, model.Name,
                model.City, model.Address, model.Country, model.Avatar);

            if (!updated)
            {
                return BadRequest();
            }

            return Ok();
        }
    }
}