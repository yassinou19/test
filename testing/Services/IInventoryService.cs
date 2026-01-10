using testing.Models;

namespace testing.Services;

public interface IInventoryService
{
    bool CheckStock(int productId, int quantity);
    void UpdateStock(int productId, int quantityChange);
    string GetStockLevelMessage(int productId);
}
