using System.Collections.Generic;
using testing.Models;

namespace testing.Services;

public class TestServiceOne : ITestServiceOne
{
    public string GetOne()
    {
        return "1";
    }
}