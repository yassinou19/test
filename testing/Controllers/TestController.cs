using Microsoft.AspNetCore.Mvc;
using testing.Models;
using testing.Services;

namespace testing.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TestController : ControllerBase
{
    private readonly ITestService _testService;

    public TestController(ITestService testService)
    {
        _testService = testService;
    }

    [HttpGet]
    public IActionResult GetAll() => Ok(_testService.GetAll());

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var item = _testService.GetById(id);
        return item != null ? Ok(item) : NotFound();
    }

    [HttpPost]
    public IActionResult Create([FromBody] TestItem item) => Ok(_testService.Create(item));

    [HttpPut("{id}")]
    public IActionResult Update(int id, [FromBody] TestItem item)
    {
        var updated = _testService.Update(id, item);
        return updated != null ? Ok(updated) : NotFound();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id) => _testService.Delete(id) ? Ok() : NotFound();
}