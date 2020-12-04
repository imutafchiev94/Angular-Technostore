namespace Technostore.Server.Features.Categories
{
    using Infrastructure;
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Http;

    public class CategoriesController : ApiController
    {

        private readonly ICategoryService categoryService;


        public CategoriesController(ICategoryService categoryService)
        {
            this.categoryService = categoryService;
        }


        //[Authorize]
        //[HttpGet]
        //[ProducesResponseType(StatusCodes.Status200OK)]
        //public async Task<IEnumerable<CategoryListingResponseModel>> All()
        //{
        //    return await this.categoryService.All();
        //}

        [Authorize]
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IEnumerable<CategoryListingResponseModel>> Mine()
        {
            var userId = this.User.GetId();
            return await this.categoryService.ByUser(userId);
        }

        [Authorize]
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<ActionResult<int>> Create(CreateCategoryRequestModel model)
        {
            var userId = this.User.GetId();

            var id = await this.categoryService.Create(model.CategoryPicUrl, model.Name, userId);

            return Created(nameof(this.Create), id);
        }

    }
}
