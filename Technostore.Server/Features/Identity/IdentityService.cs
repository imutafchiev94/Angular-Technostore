using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Technostore.Server.Data;
using Technostore.Server.Data.Models;
using Technostore.Server.Features.Identity.Models;

namespace Technostore.Server.Features.Identity
{
    using System;
    using System.IdentityModel.Tokens.Jwt;
    using System.Security.Claims;
    using System.Text;
    using Microsoft.IdentityModel.Tokens;

    public class IdentityService : IIdentityService
    {
        private readonly TechnostoreDbContext data;
        public IdentityService(TechnostoreDbContext data)
        {
            this.data = data;
        }

        public string GenerateJwtToken(string userId, string userName, string secret, string userRole)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier, userId),
                    new Claim(ClaimTypes.Name, userName),
                    new Claim(ClaimTypes.Role, userRole)
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var encriptedToken = tokenHandler.WriteToken(token);

            return encriptedToken;
        }

        public string GenerateAdminToken(string userId, string userName, string secret)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier, userId),
                    new Claim(ClaimTypes.Name, userName),
                    new Claim(ClaimTypes.Role, "Admin")
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var encriptedToken = tokenHandler.WriteToken(token);

            return encriptedToken;
        }

        public async Task<UserDetailsModel> GetUser(string userId)
            => await this.data.Users.Where(c => c.Id == userId)
                .Select(c => new UserDetailsModel
            {
                UserName = c.UserName,
                FirstName = c.FirstName,
                LastName = c.LastName,
                City = c.City,
                Country = c.Country,
                Address = c.Address,
                Avatar = c.Avatar,
                Id = c.Id
            }).FirstOrDefaultAsync();

        public async Task<bool> EditUser(string userId, string firstName, string lastName, string city, string address, string country,
            string avatar)
        {
            var user = await this.data.Users.FirstOrDefaultAsync(u => u.Id == userId);

            if (user == null)
            {
                return false;
            }

            user.FirstName = firstName;
            user.LastName = lastName;
            user.City = city;
            user.Country = country;
            user.Address = address;
            user.Avatar = avatar;

            this.data.Users.Update(user);
            await this.data.SaveChangesAsync();

            return true;
        }

        public async Task<bool> IsAdmin(string userId)
        {
            var user = await this.data.Users.FirstOrDefaultAsync(u => u.Id == userId);

            if (user.Role == "Admin")
            {
                return true;
            }

            return false;
        }
    }
}
