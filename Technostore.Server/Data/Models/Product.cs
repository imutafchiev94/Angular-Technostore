using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Technostore.Server.Data.Models
{
    public class Product
    {
        public Product()
        {
            this.Order = new List<ProductOrder>();
        }

        public int Id { get; set; }

        public string ModelName { get; set; }

        public string Brand { get; set; }

        public int CategoryId { get; set; }

        public Category Category { get; set; }

        public string Slug { get; set; }

        public string Description { get; set; }

        public string CPUModel { get; set; }

        public string RAM { get; set; }

        public string Storage { get; set; }

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

        public string AuthorId { get; set; }

        public User Author { get; set; }

        public ICollection<ProductOrder> Order { get; set; }
    }
}
