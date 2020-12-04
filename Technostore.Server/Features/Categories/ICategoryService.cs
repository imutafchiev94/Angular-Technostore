namespace Technostore.Server.Features.Categories
{
    using Models;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    public interface ICategoryService
    {
        Task<int> Create(string imageUrl, string name, string userId);

        Task<IEnumerable<CategoryListingModel>> All();

        Task<CategoryDetailsModel> Details(int id);
    }
}
