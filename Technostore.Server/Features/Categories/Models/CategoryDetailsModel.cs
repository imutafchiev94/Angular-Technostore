namespace Technostore.Server.Features.Categories.Models
{
    using Products;
    using System.Collections.Generic;
    
    public class CategoryDetailsModel : CategoryListingModel
    {
        public IEnumerable<ProductsListingResponseModel> Products { get; set; }

    }
}
