using testing.Models;

namespace testing.Services;

public interface IOrderService
{
    Order CreateOrder(string customerName, List<OrderItem> items);
    Order GetOrder(int id);
    string ProcessOrder(int orderId);
    bool CancelOrder(int orderId);
}
