using testing.Models;

namespace testing.Services;

public interface ITestService
{
    IEnumerable<TestItem> GetAll();
    TestItem GetById(int id);
    TestItem Create(TestItem item);
    TestItem Update(int id, TestItem item);
    bool Delete(int id);
}