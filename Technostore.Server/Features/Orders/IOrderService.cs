namespace Technostore.Server.Features.Orders
{
    using System.Threading.Tasks;
    using Models;
    public interface IOrderService
    {

        Task<int> Create(string firstName, string lastName, string phoneNumber, string email,
            string address, string city, string country, int postalCode, string userId);

        Task AddProductToCart(string userId, int productId);

        Task RemoveFromCart(string userId, int productId);

        Task ClearCart(string userId);

        Task<OrdersDetailsModel> Details(string userId);

    }
}
