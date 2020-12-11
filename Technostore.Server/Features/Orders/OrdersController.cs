

using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Technostore.Server.Infrastructure;

namespace Technostore.Server.Features.Orders
{
    using static WebConstants;
    using Models;
    using Infrastructure.Extensions;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
   

    public class OrdersController : ApiController
    {
        private readonly IOrderService orderService;

        public OrdersController(IOrderService orderService)
        {
            this.orderService = orderService;
        }

        [HttpGet]
        [Route(Id)]
        [Authorize]
        public async Task<ActionResult<OrdersDetailsModel>> Details()
        {
            var userId = this.User.GetId();

            var order = await this.orderService.Details(userId);

            return order;
        }

        [HttpPost]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<int>> AddProduct(int productId)
        {
            var userId = this.User.GetId();

            await orderService.AddProductToCart(userId, productId);

            return Ok();
        }

        [HttpPut]
        [Route(Id)]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<int>> RemoveFromCart(int productId)
        {
            var userId = this.User.GetId();

            await orderService.RemoveFromCart(userId, productId);

            return Ok();
        }

        [HttpPut]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<int>> ClearCart()
        {
            var userId = this.User.GetId();

            await orderService.ClearCart(userId);

            return Ok();
        }

        [HttpPut]
        [Route(nameof(Create))]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<int>> Create(CreateOrderRequestModel model)
        {
            var userId = this.User.GetId();

           int id = await orderService.Create(model.FirstName, model.LastName, model.PhoneNumber, model.Email,
                model.Address, model.City, model.Country, model.PostalCode, userId);

            return Created(nameof(Create), id);
        }

    }
}
