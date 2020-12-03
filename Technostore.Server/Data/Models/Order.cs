using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Technostore.Server.Data.Models
{
    public class Order
    {
        public Order()
        {
            this.Product = new List<ProductOrder>();
        }

        [Required]
        [Key]
        public int Id { get; set; }

        [Required]
        public DateTime CreatedOn { get; set; }

        [Required]
        public string UserId { get; set; }

        public User User { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string PhoneNumber { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string Country { get; set; }

        [Required]
        public int PostalCode { get; set; }

        public ICollection<ProductOrder> Product { get; set; }
    }
}
