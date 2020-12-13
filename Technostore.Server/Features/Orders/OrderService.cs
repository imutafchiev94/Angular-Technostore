using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Technostore.Server.Data;
using Technostore.Server.Data.Models;
using Technostore.Server.Features.Identity;
using Technostore.Server.Features.Orders.Models;
using Technostore.Server.Features.Products;

namespace Technostore.Server.Features.Orders
{
    public class OrderService : IOrderService
    {
        private readonly TechnostoreDbContext data;
        private readonly IIdentityService identityService;

        public OrderService(TechnostoreDbContext data, IIdentityService identityService)
        {
            this.data = data;
            this.identityService = identityService;
        }

        public async Task<int> Create(string firstName, string lastName, string phoneNumber, string email,
            string address, string city, string country, int postalCode, string userId)
        {
            var order =  this.data.Orders.FirstOrDefault(o => o.UserId == userId);

            order.FirstName = firstName;
            order.LastName = lastName;
            order.PhoneNumber = phoneNumber;
            order.Email = email;
            order.CreatedOn = DateTime.UtcNow;
            order.Address = address;
            order.City = city;
            order.Country = country;
            order.PostalCode = postalCode;
            order.UserId = userId;

            this.data.Orders.Update(order);
            await this.data.SaveChangesAsync();

            order.Product.Clear();
            this.data.Update(order);
            await this.data.SaveChangesAsync();

            return order.Id;
        }

        public async Task<Order> AddProductToCart(string userId, int productId)
        {
            var product =  this.data.Products.FirstOrDefault(p => p.Id == productId);

            var user =  this.data.Users.FirstOrDefault(u => u.Id == userId);

            var order =  this.data.Orders.FirstOrDefault(o => o.UserId == userId);

            if (product != null && user != null)
            {


                if (order == null)
                {
                    order = new Order
                    {
                        Address = user.Address,
                        City = user.City,
                        Country = user.Country,
                        CreatedOn = DateTime.UtcNow,
                        Email = user.Email,
                        UserId = userId,
                        FirstName = "First Name",
                        LastName = "LastName",
                        PhoneNumber = "0000",
                        PostalCode = 1,
                    };

                    this.data.Orders.Add(order);

                    var productOrder = new ProductOrder
                    {
                        Product = product,
                        ProductId = productId,
                        Order = order,
                        OrderId = order.Id
                    };
                    order.Product.Add(productOrder);
                    await this.data.SaveChangesAsync();
                }
                else
                {
                    var productOrder = new ProductOrder
                    {
                        Product = product,
                        ProductId = productId,
                        Order = order,
                        OrderId = order.Id
                    };
                    order.CreatedOn = DateTime.UtcNow;
                    bool isInOrder = false;
                    foreach (var productInOrder in order.Product)
                    {
                        if (productInOrder.ProductId == productId)
                        {
                            isInOrder = true;
                        }
                    }

                    if (!isInOrder)
                    {
                        order.Product.Add(productOrder);
                        this.data.Orders.Update(order);
                        await this.data.SaveChangesAsync();
                    }
                }

                return order;
            }

            return null;
        }

        public async Task RemoveFromCart(string userId, int productId)
        {
            var product =  this.data.Products.FirstOrDefault(p => p.Id == productId);

            var user =  this.data.Users.FirstOrDefault(u => u.Id == userId);

            var order =  this.data.Orders.FirstOrDefault(o => o.UserId == userId);

            if (product != null && user != null && order != null )
            {
                var isRemoved = false;
                foreach (var productToRemove in order.Product)
                {
                    if (productToRemove.ProductId == productId)
                    {
                        isRemoved = order.Product.Remove(productToRemove);
                    }
                }

                if (isRemoved)
                {
                    this.data.Orders.Update(order);
                    await this.data.SaveChangesAsync();
                }
            }
        }

        public async Task ClearCart(string userId)
        {
            var user = await this.data.Users.FirstOrDefaultAsync(u => u.Id == userId);

            var order = await this.data.Orders.FirstOrDefaultAsync(o => o.UserId == userId);

            if (user != null && order != null)
            {
                order.Product = new List<ProductOrder>();
                this.data.Orders.Update(order);
                await this.data.SaveChangesAsync();
            }
        }

        public async Task<OrdersDetailsModel> Details(string userId)
        {
            var user = await this.data.Users.FirstOrDefaultAsync(u => u.Id == userId);

            var order = await this.data.Orders.Where(o => o.UserId == userId)
                .Select(o => new OrdersDetailsModel
                {
                    Address = o.Address,
                    City = o.City,
                    Country = o.Country,
                    Email = o.Email,
                    FirstName = o.FirstName,
                    LastName = o.LastName,
                    PhoneNumber = o.PhoneNumber,
                    PostalCode = o.PostalCode,
                    Products = o.Product.Select(p => new ProductOrderList()
                    {
                        Brand = p.Product.Brand,
                        CategoryId = p.Product.CategoryId,
                        Id = p.ProductId,
                        ModelName = p.Product.ModelName,
                        ProductImageUrl = p.Product.ProductImageUrl,
                        Price = p.Product.Price,
                        CategoryName = p.Product.Category.Name
                    }).ToList()
                }).FirstOrDefaultAsync();

            return order;
        }

        public async Task<int> GetProductsCount(string userId)
        {
            var user = await this.data.Users.FirstOrDefaultAsync(u => u.Id == userId);

            var order = await this.data.Orders.FirstOrDefaultAsync(o => o.UserId == userId);

            var productsCount = 0;

            if (user != null && order != null)
            {
                productsCount = order.Product.Count;
            }

            return productsCount;
        }
    }
}
