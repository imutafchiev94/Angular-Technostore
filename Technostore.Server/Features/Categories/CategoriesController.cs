namespace Technostore.Server.Features.Categories
{
    using Models;
    using Infrastructure.Extensions;
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Http;

    using static Infrastructure.WebConstants;

    public class CategoriesController : ApiController
    {

        private readonly ICategoryService categoryService;


        public CategoriesController(ICategoryService categoryService)
        {
            this.categoryService = categoryService;
        }

        
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IEnumerable<CategoryListingModel>> All()
        {
            return await this.categoryService.All();
        }

        [HttpGet]
        [Route(Id)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<CategoryDetailsModel>> Details(int id)
            => await this.categoryService.Details(id);

        [Authorize(Roles = "Admin")]
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<ActionResult<int>> Create(CreateCategoryRequestModel model)
        {
            var userId = this.User.GetId();

            var id = await this.categoryService.Create(model.CategoryPicUrl, model.Name, userId);

            return Created(nameof(this.Create), id);
        }


        [HttpPut]
        [Route(Id)]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> Update(UpdateCategoryRequestModel model)
        {
            var userId = this.User.GetId();

            var updated = await this.categoryService.Update(model.Id, model.CategoryPicUrl, model.Name, userId);

            if (!updated)
            {
                return BadRequest();
            }

            return Ok();
        }

        [HttpDelete]
        [Authorize(Roles = "Admin")]
        [Route(Id)]
        public async Task<ActionResult> Delete(int id)
        {
            var userId = this.User.GetId();

            var deleted = await this.categoryService.Delete(id, userId);

            if (!deleted)
            {
                return BadRequest();
            }

            return Ok();
        }
    }
}
