using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Technostore.Server.Data;
using Technostore.Server.Data.Models;

namespace Technostore.Server.Features.Categories
{
    public class CategoryService : ICategoryService
    {
        private readonly TechnostoreDbContext data;

        public CategoryService(TechnostoreDbContext data)
        {
            this.data = data;
        }

        public async Task<int> Create(string imageUrl, string name, string userId) 
        {
            var category = new Category()
            {
                Name = name,
                Slug = name.ToLower().Replace(' ', '-'),
                CategoryPicUrl = imageUrl,
                AuthorId = userId
            };

            this.data.Categories.Add(category);

            await this.data.SaveChangesAsync();

            return category.Id;
        }

        public async Task<IEnumerable<CategoryListingResponseModel>> All()
            => await this.data
                .Categories
                .Select(c => new CategoryListingResponseModel
                {
                    Id = c.Id,
                    Name = c.Name,
                    CategoryPicUrl = c.CategoryPicUrl,
                    AuthorId = ""
                })
                .ToListAsync();

        public async Task<IEnumerable<CategoryListingResponseModel>> ByUser(string userId)
            => await this.data
                .Categories
                .Where(c => c.AuthorId == userId)
                .Select(c => new CategoryListingResponseModel
                {
                    Id = c.Id,
                    Name = c.Name,
                    CategoryPicUrl = c.CategoryPicUrl,
                    AuthorId = userId
                })
                .ToListAsync();
    }
}
