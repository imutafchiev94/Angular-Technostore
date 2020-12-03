using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Technostore.Server.Data.Models
{
    public class Category
    {

        public Category()
        {
            Products = new List<Product>();
        }

        [Required]
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Slug { get; set; }

        [Required]
        public string CategoryPicUrl { get; set; }

        [Required]
        public string AuthorId { get; set; }

        public User Author { get; set; }

        public ICollection<Product> Products { get; set; }

    }
}
