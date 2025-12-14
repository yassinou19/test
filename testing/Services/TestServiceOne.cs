using System.Collections.Generic;
using testing.Models;

namespace testing.Services;

public class TestServiceOne : ITestServiceOne
{
    public string GetOne()
    {
        int idA = 1;
        int idB = 2;
        if (idA == idB)
        {
            return "1";
        }
        return "1";
    }
}