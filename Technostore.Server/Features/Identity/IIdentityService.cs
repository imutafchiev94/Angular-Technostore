using System.Threading.Tasks;
using Technostore.Server.Data.Models;
using Technostore.Server.Features.Identity.Models;

namespace Technostore.Server.Features.Identity
{
    public interface IIdentityService
    {

        string GenerateJwtToken(string userId, string userName, string secret, string userRole);

        string GenerateAdminToken(string userId, string userName, string secret);

        Task<UserDetailsModel> GetUser(string userId);

        Task<bool> EditUser(string userId, string name,
            string city, string address, string country, string avatar);

        Task<bool> IsAdmin(string userId);
    }
}
