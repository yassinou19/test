using Refit;
using System.Threading.Tasks;

namespace testing.Interfaces;

public interface IApiService
{
    [Get("/")]
    Task<string> GetHomePage();
}
