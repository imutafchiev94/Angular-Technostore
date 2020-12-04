﻿

namespace Technostore.Server.Features.Categories
{
    using Models;
    using Infrastructure.Extensions;
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

        
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IEnumerable<CategoryListingModel>> All()
        {
            return await this.categoryService.All();
        }

        [HttpGet]
        [Route("{id}")]
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

    }
}
