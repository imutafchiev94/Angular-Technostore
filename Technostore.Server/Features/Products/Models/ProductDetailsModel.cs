using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.AccessControl;
using System.Threading.Tasks;
using Technostore.Server.Data.Models;

namespace Technostore.Server.Features.Products.Models
{
    public class ProductDetailsModel
    {
        public int Id { get; set; }

        public string ModelName { get; set; }

        public string Brand { get; set; }

        public string CategoryName { get; set; }

        public string Slug { get; set; }

        public string Description { get; set; }

        public string CPUModel { get; set; }

        public int RAM { get; set; }

        public string StorageType { get; set; }

        public int Storage { get; set; }

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

        public string AuthorId { get; set; }
    }
}
