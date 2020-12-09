using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace Technostore.Server.Data.Models
{
    public class User : IdentityUser
    {
        public User()
        {
            this.Order = new List<Order>();
            this.Categories = new List<Category>();
            this.Products = new List<Product>();
        }

        
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public string Avatar { get; set; }

        public string Role { get; set; }

        public ICollection<Category> Categories { get; set; }

        public ICollection<Product> Products { get; set; }

        public ICollection<Order> Order { get; set; }
    }
}