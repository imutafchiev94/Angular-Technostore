using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Technostore.Server.Features.Categories
{
    public interface ICategoryService
    {
        Task<int> Create(string imageUrl, string name, string userId);
    }
}
