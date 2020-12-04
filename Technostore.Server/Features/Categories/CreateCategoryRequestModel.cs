

namespace Technostore.Server.Features.Categories
{
    using System.ComponentModel.DataAnnotations;

    public class CreateCategoryRequestModel
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string CategoryPicUrl { get; set; }
    }
}
