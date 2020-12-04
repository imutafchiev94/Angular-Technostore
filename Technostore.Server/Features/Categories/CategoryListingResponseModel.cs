using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Technostore.Server.Features.Categories
{
    public class CategoryListingResponseModel
    {


        public int Id { get; set; }

        public string Name { get; set; }

        public string CategoryPicUrl { get; set; }

        public string AuthorId { get; set; }

    }
}
