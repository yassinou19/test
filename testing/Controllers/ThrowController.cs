using Microsoft.AspNetCore.Mvc;
using System;

namespace TestData
{
    [ApiController]
    [Route("[controller]")]
    public class ThrowController : ControllerBase
    {
        [HttpGet("execute")]
        public string Execute(string? x)
        {
            return x ?? throw new InvalidOperationException();
        }
    }
}