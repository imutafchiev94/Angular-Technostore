using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Technostore.Server.Data;
using Technostore.Server.Data.Models;
using Technostore.Server.Infrastructure;
using Technostore.Server.Models.Category;

namespace Technostore.Server.Controllers
{
    public class CategoryController : ApiController
    {

        private readonly TechnostoreDbContext data;

        public CategoryController(TechnostoreDbContext data)
        {
            this.data = data;
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult<int>> Create(CreateCategoryRequestModel model)
        {
            var userId = this.User.GetId();

            var category = new Category()
            {
                Name = model.Name,
                Slug = model.Slug,
                CategoryPicUrl = model.CategoryPicUrl,
                AuthorId = userId
            };

            this.data.Categories.Add(category);

            await this.data.SaveChangesAsync();

            return Created(nameof(this.Create), category.Id);
        }

    }
}
