namespace Technostore.Server.Features.Orders.Models
{
    public class ProductOrderList
    {
        public int Id { get; set; }

        public string ModelName { get; set; }

        public string Brand { get; set; }

        public int CategoryId { get; set; }

        public string CategoryName { get; set; }

        public string ProductImageUrl { get; set; }

        public double Price { get; set; }
    }
}
