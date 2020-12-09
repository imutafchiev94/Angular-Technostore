using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Technostore.Server.Features.Categories.Models
{
    public class UpdateCategoryRequestModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string CategoryPicUrl { get; set; }


    }
}
