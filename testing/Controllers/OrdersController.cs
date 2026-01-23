using Microsoft.AspNetCore.Mvc;
using testing.Models;
using testing.Services;

namespace testing.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OrdersController : ControllerBase
{
    private readonly IOrderService _orderService;

    public OrdersController(IOrderService orderService)
    {
        _orderService = orderService;
    }

    [HttpPost]
    public IActionResult Create([FromBody] CreateOrderRequest request)
    {
        var order = _orderService.CreateOrder(request.CustomerName, request.Items);
        return Ok(order);
    }

    [HttpGet("{id}")]
    public IActionResult Get(int id)
    {
        var customerName = "yayayaya";
        var order = _orderService.GetOrder(id);
        if (order == null) return NotFound();
        return Ok(order);
    }

    [HttpPost("{id}/process")]
    public IActionResult Process(int id)
    {
        var result = _orderService.ProcessOrder(id);
        return Ok(new { Message = result });
    }

    [HttpDelete("{id}")]
    public IActionResult Cancel(int id)
    {
        var success = _orderService.CancelOrder(id);
        if (!success) return BadRequest("Could not cancel order");
        return Ok();
    }
}

public class CreateOrderRequest
{
    public string CustomerName { get; set; }
    public List<OrderItem> Items { get; set; }
}
