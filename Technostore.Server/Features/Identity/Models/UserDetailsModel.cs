using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.AccessControl;
using System.Threading.Tasks;

namespace Technostore.Server.Features.Identity.Models
{
    public class UserDetailsModel
    {
        public string Id { get; set; }

        public string UserName { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public string Avatar { get; set; }
    }
}
