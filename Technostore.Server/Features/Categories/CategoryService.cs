
using Technostore.Server.Features.Products;

namespace Technostore.Server.Features.Categories
{
    using Data;
    using Models;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using Technostore.Server.Data.Models;
    
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

        public async Task<IEnumerable<CategoryListingModel>> All()
            => await this.data
                .Categories
                .Select(c => new CategoryListingModel()
                {
                    Id = c.Id,
                    Name = c.Name,
                    CategoryPicUrl = c.CategoryPicUrl
                })
                .ToListAsync();

        public async Task<CategoryDetailsModel> Details(int id)
            => await this.data
                .Categories
                .Include(c => c.Products)
                .Where(c => c.Id == id)
                .Select(c => new CategoryDetailsModel
                {
                    Products = c.Products.Select(p => new ProductsListingResponseModel
                    {
                        Brand = p.Brand,
                        CategoryId = c.Id,
                        Id = p.Id,
                        ModelName = p.ModelName,
                        ProductImageUrl = p.ProductImageUrl
                    }).ToList(),
                    Id = c.Id,
                    Name = c.Name,
                    CategoryPicUrl = c.CategoryPicUrl
                })
                .FirstOrDefaultAsync();
    }
}
