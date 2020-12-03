

namespace Technostore.Server.Features.Products
{
    using System.ComponentModel.DataAnnotations;

    public class CreateProductRequestModel
    {
        [Required]
        public string ModelName { get; set; }

        [Required]
        public string Brand { get; set; }

        [Required]
        public string Slug { get; set; }

        [Required]
        public string Description { get; set; }

        public string CPUModel { get; set; }

        public string RAM { get; set; }

        public string Storage { get; set; }

        [Required]
        public double Price { get; set; }

        public string VideoCardModel { get; set; }

        public int VideoCardMemory { get; set; }

        public string ProductImageUrl { get; set; }

        public string OS { get; set; }

        public string FrontCamera { get; set; }

        public string BackCamera { get; set; }

        public string Display { get; set; }

        public double Weight { get; set; }

        public string USB { get; set; }

        public string Ports { get; set; }

        public bool HDMI { get; set; }

        public string Battery { get; set; }
    }
}
