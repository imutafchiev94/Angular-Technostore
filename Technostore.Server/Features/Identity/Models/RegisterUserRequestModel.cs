namespace Technostore.Server.Features.Identity.Models
{
    using System.ComponentModel.DataAnnotations;

    public class RegisterUserRequestModel
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        public string Email { get; set; }
        
        [Required]
        public string Password { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Country { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public string Avatar { get; set; }

        [Required]
        public string Role { get; set; }
    }
}