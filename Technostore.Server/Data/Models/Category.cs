using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Technostore.Server.Data.Models
{
    public class Category
    {

        public Category()
        {
            Products = new List<Product>();
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public string Slug { get; set; }

        public string CategoryPicUrl { get; set; }

        public ICollection<Product> Products { get; set; }

    }
}
