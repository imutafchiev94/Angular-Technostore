using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Technostore.Server.Features.Identity;
using Technostore.Server.Features.Products.Models;
using Technostore.Server.Infrastructure.Extensions;

namespace Technostore.Server.Features.Products
{

    using static Infrastructure.WebConstants;

    public class ProductsController : ApiController
    {
        private readonly IProductService productService;

        public ProductsController(IProductService productService)
        {
            this.productService = productService;
        }

        [HttpGet]
        [Route(Id)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ProductDetailsModel>> Details(int id)
            => await this.productService.Details(id);

        [HttpPost]
        [Route(nameof(Create))]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<ActionResult<int>> Create(CreateProductRequestModel model)
        {
            var userId = this.User.GetId();

            var id = await productService.Create(userId, model.ModelName, model.Brand, model.CategoryId, model.Description,
                model.CPUModel, model.RAM, model.StorageType, model.Storage, model.Price, model.VideoCardModel,
                model.VideoCardMemory, model.ProductImageUrl, model.OS, model.FrontCamera, model.BackCamera,
                model.Display, model.Weight, model.USB, model.Ports, model.HDMI, model.Battery);

            return Created(nameof(this.Create), id);
        }

        [HttpPut]
        [Route(nameof(Update))]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<ActionResult> Update(UpdateProductRequestModel model)
        {
            var userId = this.User.GetId();

            var updated = await this.productService.Update(model.Id, userId, model.ModelName, model.Brand,
                model.CategoryId, model.Description, model.CPUModel, model.RAM, model.StorageType,
                model.Storage, model.Price, model.VideoCardModel, model.VideoCardMemory, model.ProductImageUrl,
                model.OS, model.FrontCamera, model.BackCamera, model.Display, model.Weight, model.USB,
                model.Ports, model.HDMI, model.Battery);

            if (!updated)
            {
                return Unauthorized();
            }

            return Ok();
        }

        [HttpDelete]
        [Route(Id)]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<ActionResult> Delete(int id)
        {
            var userId = this.User.GetId();

            var deleted = await this.productService.Delete(id, userId);

            if (!deleted)
            {
                return Unauthorized();
            }

            return Ok();
        }
    }
}
