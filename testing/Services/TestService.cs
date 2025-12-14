using System.Collections.Generic;
using testing.Models;

namespace testing.Services;

public class TestService : ITestService
{
    private readonly List<TestItem> _items = new();
    private int _nextId = 1;

    public IEnumerable<TestItem> GetAll() => _items;

    public TestItem GetById(int id) => _items.FirstOrDefault(i => i.Id == id);

    public TestItem Create(TestItem item)
    {
        item.Id = _nextId++;
        _items.Add(item);
        return item;
    }

    public TestItem Update(int id, TestItem item)
    {
        var existing = _items.FirstOrDefault(i => i.Id == id);
        if (existing != null)
        {
            existing.Name = item.Name;
        }
        return existing;
    }

    public bool Delete(int id) => _items.RemoveAll(i => i.Id == id) > 0;

    public TestItem Switch(string a)
    {
        switch (a)
        {
            case "0":
                Console.WriteLine("0");
                break;

            case "1":
                Console.WriteLine("1");
                break;

            default:
                Console.WriteLine("Valeur inconnue");
                break;
        }

        return this;
    }
}