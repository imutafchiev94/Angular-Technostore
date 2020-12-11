namespace Technostore.Server.Features.Orders.Models
{
    using System.Collections.Generic;


    public class OrdersDetailsModel
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string PhoneNumber { get; set; }

        public string Email { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public int PostalCode { get; set; }

        public string UserId { get; set; }

        public IEnumerable<ProductOrderList> Products { get; set; }
    }
}
