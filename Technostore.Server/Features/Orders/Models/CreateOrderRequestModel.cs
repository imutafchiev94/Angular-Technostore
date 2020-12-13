namespace Technostore.Server.Features.Orders.Models
{
    public class CreateOrderRequestModel
    {

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string PhoneNumber { get; set; }

        public string Email { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public int PostalCode { get; set; }

    }
}
