

namespace Technostore.Server.Features.Products
{
    using System.ComponentModel.DataAnnotations;

    public class CreateProductRequestModel
    {
        [Required]
        public string ModelName { get; set; }

        [Required]
        public string Brand { get; set; }

        public string Slug { get; set; }

        [Required]
        public int CategoryId { get; set; }

        [Required]
        public string Description { get; set; }

        public string CPUModel { get; set; }

        public int RAM { get; set; }

        public string StorageType { get; set; }

        public int Storage { get; set; }

        [Required]
        public double Price { get; set; }

        public string VideoCardModel { get; set; }

        public int VideoCardMemory { get; set; }

        public string ProductImageUrl { get; set; }

        public string OS { get; set; }

        public double FrontCamera { get; set; }

        public double BackCamera { get; set; }

        public double Display { get; set; }

        public double Weight { get; set; }

        public string USB { get; set; }

        public string Ports { get; set; }

        public bool HDMI { get; set; }

        public string Battery { get; set; }
    }
}
