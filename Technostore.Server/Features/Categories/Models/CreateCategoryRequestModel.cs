namespace Technostore.Server.Features.Categories.Models
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
