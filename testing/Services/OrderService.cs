using testing.Models;

namespace testing.Services;

public class OrderService : IOrderService
{
    private readonly List<Order> _orders = new();
    private int _nextOrderId = 1;
    private readonly IInventoryService _inventoryService;

    public OrderService(IInventoryService inventoryService)
    {
        _inventoryService = inventoryService;
    }

    public Order CreateOrder(string customerName, List<OrderItem> items)
    {
        var order = new Order
        {
            Id = _nextOrderId++,
            CustomerName = customerName,
            Items = items,
            Status = OrderStatus.Pending
        };

        // Loop and nested if
        foreach (var item in items)
        {
            if (!_inventoryService.CheckStock(item.ProductId, item.Quantity))
            {
                order.Status = OrderStatus.Cancelled;
                _orders.Add(order);
                return order;
            }
        }

        _orders.Add(order);
        return order;
    }

    public Order GetOrder(int id) => _orders.FirstOrDefault(o => o.Id == id);

    public string ProcessOrder(int orderId)
    {
        var order = GetOrder(orderId);
        if (order == null) return "Order not found";

        // Switch case
        switch (order.Status)
        {
            case OrderStatus.Pending:
                order.Status = OrderStatus.Processing;
                return "Order is now being processed";
            
            case OrderStatus.Processing:
                order.Status = OrderStatus.Shipped;
                return "Order has been shipped";

            case OrderStatus.Shipped:
                order.Status = OrderStatus.Delivered;
                return "Order was delivered";

            case OrderStatus.Cancelled:
                return "Cannot process a cancelled order";

            default:
                return "Unknown order status";
        }
    }

    public bool CancelOrder(int orderId)
    {
        var order = GetOrder(orderId);
        if (order != null)
        {
            // Nested if-else
            if (order.Status == OrderStatus.Pending || order.Status == OrderStatus.Processing)
            {
                order.Status = OrderStatus.Cancelled;
                
                // Return items to stock
                foreach (var item in order.Items)
                {
                    _inventoryService.UpdateStock(item.ProductId, item.Quantity);
                }
                return true;
            }
            else
            {
                return false; // Already shipped or delivered
            }
        }
        return false;
    }
}
