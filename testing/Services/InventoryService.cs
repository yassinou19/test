using testing.Models;

namespace testing.Services;

public class InventoryService : IInventoryService
{
    private readonly List<Product> _products = new()
    {
        new Product { Id = 1, Name = "Laptop", Price = 1200, StockQuantity = 10 },
        new Product { Id = 2, Name = "Mouse", Price = 25, StockQuantity = 50 },
        new Product { Id = 3, Name = "Monitor", Price = 300, StockQuantity = 5 }
    };

    public bool CheckStock(int productId, int quantity)
    {
        // Simple if-else
        if (quantity <= 0)
        {
            return false;
        }
        else
        {
            //ok
            var product = _products.FirstOrDefault(p => p.Id == productId);
            
            // Nested if-else
            if (product != null)
            {
                if (product.StockQuantity >= quantity)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }
    }

    public void UpdateStock(int productId, int quantityChange)
    {
        var product = _products.FirstOrDefault(p => p.Id == productId);
        if (product != null)
        {
            product.StockQuantity += quantityChange;
        }
    }

    public string GetStockLevelMessage(int productId)
    {
        var product = _products.FirstOrDefault(p => p.Id == productId);
        if (product == null) return "Unknown";

        // Switch expression
        return product.StockQuantity switch
        {
            0 => "Out of stock",
            < 5 => "Critical low stock",
            < 10 => "Low stock",
            _ => "In stock"
        };
    }

    public void AuditInventory()
    {
        // Loop
        foreach (var product in _products)
        {
            if (product.StockQuantity < 10)
            {
                // Nested logic
                if (product.Price > 100)
                {
                    Console.WriteLine($"Expensive item {product.Name} is low on stock!");
                }
                else
                {
                    Console.WriteLine($"Item {product.Name} is low on stock.");
                }
            }
        }
    }
}
