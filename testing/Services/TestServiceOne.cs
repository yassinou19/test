using System.Collections.Generic;
using testing.Models;

namespace testing.Services;

public class TestServiceOne : ITestServiceOne
{
    public string GetOne()
    {
        List<int> collection = new List<int>(10);
        int idA = 1;
        int idB = 2;
        if (idA == idB)
        {
            if (idA == idB)
            {
                foreach (var item in collection)
                {
                    Console.WriteLine("OK");

                    if (item > 10)
                    {
                        break;
                    }
                }
                return "1";
            }
            else if (idA == idB)
            {
                throw new Exception("CustomException");
            }
            else
            {
                return "1";
            }
        }
        return "1";
    }
}