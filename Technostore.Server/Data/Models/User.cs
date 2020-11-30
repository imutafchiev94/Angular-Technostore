using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Technostore.Server.Data.Models
{
    public class User : IdentityUser
    {
        public User()
        {
            this.Order = new List<Order>();
        }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public ICollection<Order> Order { get; set; }
    }
}