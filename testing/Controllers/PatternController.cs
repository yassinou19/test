using Microsoft.AspNetCore.Mvc;

namespace TestData
{
    public class Customer
    {
        public string Name { get; set; } = string.Empty;
    }

    [ApiController]
    [Route("[controller]")]
    public class PatternController : ControllerBase
    {
        [HttpPost("execute")]
        public void Execute(object obj)
        {
            if (obj is Customer c)
            {
                Handle(c);
            }
        }

        private void Handle(Customer customer) { }
    }
}