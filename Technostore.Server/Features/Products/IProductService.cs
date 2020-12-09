using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Technostore.Server.Features.Products.Models;

namespace Technostore.Server.Features.Products
{
    public interface IProductService
    {

        Task<int> Create(string userId, string modelName, string brand, int categoryId,
            string description, string cpuModel, int ram, string storageType, 
            int storage, double price,string videoCardModel, int videoCardMemory, 
            string productImageUrl, string os, double frontCamera, 
            double backCamera, double display, double weight,
            string usb, string ports, bool hdmi, string battery);

        Task<bool> Update(int id, string userId, string modelName, string brand, int categoryId,
            string description, string cpuModel, int ram, string storageType,
            int storage, double price, string videoCardModel, int videoCardMemory,
            string productImageUrl, string os, double frontCamera,
            double backCamera, double display, double weight,
            string usb, string ports, bool hdmi, string battery);

        Task<ProductDetailsModel> Details(int id);

        Task<bool> Delete(int id, string userId);

    }
}
