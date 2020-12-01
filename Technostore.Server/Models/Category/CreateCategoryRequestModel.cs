using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Technostore.Server.Models.Category
{
    public class CreateCategoryRequestModel
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Slug { get; set; }

        [Required]
        public string CategoryPicUrl { get; set; }
    }
}
