

using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Technostore.Server.Infrastructure;

namespace Technostore.Server.Features.Orders
{
    using static WebConstants;
    using Models;
    using Infrastructure.Extensions;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
   

    [EnableCors]
    public class OrdersController : ApiController
    {
        private readonly IOrderService orderService;

        public OrdersController(IOrderService orderService)
        {
            this.orderService = orderService;
        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<OrdersDetailsModel>> Details()
        {
            var userId = this.User.GetId();

            var order = await this.orderService.Details(userId);

            return order;
        }

        [HttpPost]
        [Authorize]
        [Route(Id)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<int>> AddProduct(int id)
        {
            var userId = this.User.GetId();

            var order = await orderService.AddProductToCart(userId, id);

            if (order == null)
            {
                return BadRequest();
            }
            return Ok(order);
        }

        [HttpPut]
        [Route(Id)]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<int>> RemoveFromCart(int id)
        {
            var userId = this.User.GetId();

            await orderService.RemoveFromCart(userId, id);

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
