using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Technostore.Server.Data;
using Technostore.Server.Data.Models;
using Technostore.Server.Features.Identity;
using Technostore.Server.Features.Products.Models;

namespace Technostore.Server.Features.Products
{
    public class ProductService : IProductService
    {
        private readonly TechnostoreDbContext data;
        private readonly IIdentityService identityService;

        public ProductService(TechnostoreDbContext data, IIdentityService identityService)
        {
            this.data = data;
            this.identityService = identityService;
        }

        public async Task<int> Create(string userId, string modelName, string brand, int categoryId, string description, 
            string cpuModel, int ram, string storageType, int storage, double price, string videoCardModel,
            int videoCardMemory, string productImageUrl, string os, double frontCamera, double backCamera, 
            double display, double weight,string usb, string ports, bool hdmi, string battery)
        {
            var product = new Product
            {
                AuthorId = userId,
                ModelName = modelName,
                Brand = brand,
                CategoryId = categoryId,
                Description = description,
                CPUModel = cpuModel,
                RAM = ram,
                StorageType = storageType,
                Storage = storage,
                Price = price,
                VideoCardModel = videoCardModel,
                VideoCardMemory = videoCardMemory,
                ProductImageUrl = productImageUrl,
                OS = os,
                FrontCamera = frontCamera,
                BackCamera = backCamera,
                Display = display,
                Weight = weight,
                USB = usb,
                Ports = ports,
                HDMI = hdmi,
                Battery = battery
            };

            this.data.Products.Add(product);

            await this.data.SaveChangesAsync();

            return product.Id;
        }

        public async Task<bool> Update(int id, string userId, string modelName, string brand, int categoryId,
            string description, string cpuModel, int ram, string storageType, int storage, double price,
            string videoCardModel, int videoCardMemory, string productImageUrl, string os, double frontCamera,
            double backCamera, double display, double weight, string usb, string ports, bool hdmi, string battery)
        {
            var product = await GetProductByIdAndUserId(id, userId);

            if (product == null)
            {
                return false;
            }

            product.ModelName = modelName;
            product.Brand = brand;
            product.CategoryId = categoryId;
            product.Description = description;
            product.CPUModel = cpuModel;
            product.RAM = ram;
            product.StorageType = storageType;
            product.Storage = storage;
            product.Price = price;
            product.VideoCardModel = videoCardModel;
            product.VideoCardMemory = videoCardMemory;
            product.ProductImageUrl = productImageUrl;
            product.OS = os;
            product.FrontCamera = frontCamera;
            product.BackCamera = backCamera;
            product.Display = display;
            product.Weight = weight;
            product.USB = usb;
            product.Ports = ports;
            product.HDMI = hdmi;
            product.Battery = battery;

            this.data.Products.Update(product);

            await this.data.SaveChangesAsync();

            return true;
        }

        public async Task<ProductDetailsModel> Details(int id)
            => await this.data.Products
                    .Where(p => p.Id == id)
                .Select(p => new ProductDetailsModel
                {
                    ModelName = p.ModelName,
                    Brand = p.Brand,
                    CategoryName = p.Category.Name,
                    Description = p.Description,
                    CPUModel = p.CPUModel,
                    RAM = p.RAM,
                    StorageType = p.StorageType,
                    Storage = p.Storage,
                    Price = p.Price,
                    VideoCardModel = p.VideoCardModel,
                    VideoCardMemory = p.VideoCardMemory,
                    ProductImageUrl = p.ProductImageUrl,
                    OS = p.OS,
                    FrontCamera = p.FrontCamera,
                    BackCamera = p.BackCamera,
                    Display = p.Display,
                    Weight = p.Weight,
                    USB = p.USB,
                    Ports = p.Ports,
                    HDMI = p.HDMI,
                    Battery = p.Battery
                })
                .FirstOrDefaultAsync();
        

        public async Task<bool> Delete(int id, string userId)
        {
            var product = await GetProductByIdAndUserId(id, userId);

            if (product == null)
            {
                return false;
            }

            this.data.Products.Remove(product);
            await this.data.SaveChangesAsync();

            return true;
        }

        private async Task<Product> GetProductByIdAndUserId(int id, string userId)
        {
            var product = new Product();

            if (await identityService.IsAdmin(userId))
            {
                 product = await this.data.Products.Where(p => p.Id == id)
                    .FirstOrDefaultAsync();
            }

            else
            {
                product = await this.data.Products.Where(p => p.Id == id && p.AuthorId == userId)
                    .FirstOrDefaultAsync();
            }

            return product;
        }

    }
}
