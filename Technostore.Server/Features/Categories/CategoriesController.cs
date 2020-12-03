using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Technostore.Server.Infrastructure;

namespace Technostore.Server.Features.Categories
{
    public class CategoriesController : ApiController
    {

        private readonly ICategoryService categoryService;


        public CategoriesController(ICategoryService categoryService)
        {
            this.categoryService = categoryService;
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
