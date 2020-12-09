using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Technostore.Server.Features.Identity.Models
{
    public class UpdateUserRequestModel
    {
        public string Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public string Avatar { get; set; }
    }
}
