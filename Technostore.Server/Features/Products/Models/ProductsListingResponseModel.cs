using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Technostore.Server.Features.Products
{
    public class ProductsListingResponseModel
    {

        public int Id { get; set; }

        public string ModelName { get; set; }

        public string Brand { get; set; }

        public int CategoryId { get; set; }

        public string ProductImageUrl { get; set; }

    }
}
