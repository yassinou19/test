using testing.Interfaces;
using testing.Models;

namespace testing.Services;

public class OrderNotificationListener : IListener<Order>
{
    public void OnNotify(Order order)
    {
        // Adding more control flows for the CLI scanner
        if (order == null)
        {
            return;
        }

        switch (order.Status)
        {
            case OrderStatus.Shipped:
                Console.WriteLine($"Notification: Order {order.Id} has been shipped to {order.CustomerName}.");
                break;
            case OrderStatus.Delivered:
                if (order.TotalAmount > 500)
                {
                    Console.WriteLine("Notification: High value order delivered!");
                }
                break;
            default:
                // Do nothing
                break;
        }

        // Loop example
        foreach (var item in order.Items)
        {
            if (item.Quantity > 10)
            {
                Console.WriteLine($"Bulk item detected: Product {item.ProductId}");
            }
        }
    }
}
