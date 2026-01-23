using Moq;
using testing.Models;
using testing.Services;
using Xunit;

namespace testing.Tests;

public class OrderServiceTests
{
    private readonly Mock<IInventoryService> _inventoryServiceMock;
    private readonly OrderService _orderService;

    public OrderServiceTests()
    {
        _inventoryServiceMock = new Mock<IInventoryService>();
        _orderService = new OrderService(_inventoryServiceMock.Object);
    }

    [Fact]
    public void CreateOrder_WhenStockIsAvailable_ShouldReturnPendingOrder()
    {
        // Arrange
        var customerName = "John Doe";
        var items = new List<OrderItem>
        {
            new OrderItem { ProductId = 1, Quantity = 2 }
        };

        _inventoryServiceMock.Setup(s => s.CheckStock(1, 2)).Returns(true);

        // Act
        var result = _orderService.CreateOrder(customerName, items);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(OrderStatus.Pending, result.Status);
        Assert.Equal(customerName, result.CustomerName);
        _inventoryServiceMock.Verify(s => s.CheckStock(1, 2), Times.Once);
    }

    [Fact]
    public void CreateOrder_WhenStockIsNotAvailable_ShouldReturnCancelledOrder()
    {
        // Arrange
        var customerName = "Jane Doe";
        var items = new List<OrderItem>
        {
            new OrderItem { ProductId = 1, Quantity = 10 }
        };

        _inventoryServiceMock.Setup(s => s.CheckStock(1, 10)).Returns(false);

        // Act
        var result = _orderService.CreateOrder(customerName, items);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(OrderStatus.Cancelled, result.Status);
        _inventoryServiceMock.Verify(s => s.CheckStock(1, 10), Times.Once);
    }

    [Fact]
    public void ProcessOrder_WhenOrderIsPending_ShouldUpdateStatusToProcessing()
    {
        // Arrange
        var customerName = "Alice";
        var items = new List<OrderItem> { new OrderItem { ProductId = 1, Quantity = 1 } };
        _inventoryServiceMock.Setup(s => s.CheckStock(It.IsAny<int>(), It.IsAny<int>())).Returns(true);
        
        var order = _orderService.CreateOrder(customerName, items);

        // Act
        var resultMessage = _orderService.ProcessOrder(order.Id);

        // Assert
        Assert.Equal("Order is now being processed", resultMessage);
        Assert.Equal(OrderStatus.Processing, order.Status);
    }
}
