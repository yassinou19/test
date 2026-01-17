using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using Flurl.Http;
using testing.Interfaces;

namespace testing.Services;

public class SyntaxNodeExamplesService : ISyntaxNodeExamplesService
{
    private static readonly object _gate = new();
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly IApiService _apiService;

    public SyntaxNodeExamplesService(IHttpClientFactory httpClientFactory, IApiService apiService)
    {
        _httpClientFactory = httpClientFactory;
        _apiService = apiService;
    }

    public string GotoStatementExample1()
    {
        int i = 0;
        var output = new List<string>();

    start:
        i++;
        if (i < 3)
        {
            output.Add($"Loop {i}");
            goto start;
        }

        output.Add("Fin");
        return string.Join(" | ", output);
    }

    public string GotoStatementExample2()
    {
        int remaining = 2;
        var output = new List<string>();

    retry:
        output.Add($"Remaining: {remaining}");
        remaining--;
        if (remaining >= 0)
        {
            goto retry;
        }

        return string.Join(", ", output);
    }

    public string LabeledStatementExample1()
    {
        var output = new List<string>();

    label_one:
        output.Add("Reached label_one");
        return string.Join(", ", output);
    }

    public string LabeledStatementExample2()
    {
        var output = new List<string>();

    label_two:
        output.Add("Reached label_two");
        return string.Join(", ", output);
    }

    public string LocalFunctionStatementExample1()
    {
        int Add(int a, int b) => a + b;
        return $"Sum: {Add(2, 3)}";
    }

    public string LocalFunctionStatementExample2()
    {
        string Format(string name) => $"Hello {name}";
        return Format("World");
    }

    public string LockStatementExample1()
    {
        int counter = 0;
        lock (_gate)
        {
            counter++;
        }
        return $"Counter: {counter}";
    }

    public string LockStatementExample2()
    {
        var result = "";
        lock (_gate)
        {
            result = "Locked section executed";
        }
        return result;
    }

    public string ThrowExpressionExample1(string? input)
    {
        var value = input ?? throw new ArgumentNullException(nameof(input));
        return $"Value: {value}";
    }

    public string ThrowExpressionExample2(string? input)
    {
        return input ?? throw new InvalidOperationException("Input cannot be null");
    }

    public string UsingStatementExample1()
    {
        using (var stream = new MemoryStream())
        {
            stream.WriteByte(1);
            return $"Length: {stream.Length}";
        }
    }

    public string UsingStatementExample2()
    {
        using (var stream = new MemoryStream())
        {
            stream.WriteByte(2);
            stream.WriteByte(3);
            return $"Length: {stream.Length}";
        }
    }

    public string UsingDeclarationExample()
    {
        using var stream = new MemoryStream();
        stream.WriteByte(9);
        return $"Length: {stream.Length}";
    }

    public IEnumerable<int> YieldStatementExample1()
    {
        yield return 1;
        yield return 2;
        yield return 3;
    }

    public IEnumerable<int> YieldStatementExample2()
    {
        for (var i = 0; i < 2; i++)
        {
            yield return i;
        }

        yield break;
    }

    public string AnonymousMethodExpressionExample()
    {
        Func<int, int> doubleValue = delegate (int x)
        {
            return x * 2;
        };

        return $"Result: {doubleValue(4)}";
    }

    public string ParenthesizedLambdaExpressionExample()
    {
        Func<int, int, int> add = (int a, int b) => a + b;
        return $"Sum: {add(3, 5)}";
    }

    public string SimpleLambdaExpressionExample()
    {
        Func<int, int> increment = x => x + 1;
        return $"Value: {increment(7)}";
    }

    public string SwitchExpressionExample(int value)
    {
        var result = value switch
        {
            0 => "Zero",
            1 => "One",
            _ => "Other"
        };

        return result;
    }

    public string BreakContinueLoopExample(int[] items)
    {
        var output = new List<string>();

        for (int i = 0; i < items.Length; i++)
        {
            if (items[i] < 0) continue;
            if (items[i] == 0) break;
            output.Add($"Processed {items[i]}");
        }

        output.Add("After");
        return string.Join(" | ", output);
    }

    public string SwitchFallthroughGotoExample(int value)
    {
        var output = new List<string>();

        switch (value)
        {
            case 0:
                output.Add("A");
                goto case 1;
            case 1:
                output.Add("B");
                break;
            case 2:
                output.Add("C");
                goto case 1;
            default:
                output.Add("D");
                break;
        }

        output.Add("E");
        return string.Join("", output);
    }

    public string TaskWhenAllExample()
    {
        Task A() => Task.CompletedTask;
        Task B() => Task.CompletedTask;

        Task.WhenAll(A(), B()).GetAwaiter().GetResult();
        return "After";
    }

    public string ForEachVariableStatementExample()
    {
        var points = new List<(int X, int Y)> { (1, 2), (3, 4) };
        var results = new List<string>();
        foreach (var (x, y) in points)
        {
            results.Add($"Point: {x}, {y}");
        }
        return string.Join(" | ", results);
    }

    public string SwitchStatementWithGuardsExample(object input)
    {
        switch (input)
        {
            case int i when i > 10:
                return "Large integer";
            case int i:
                return "Small integer";
            case string s when s.Length > 5:
                return "Long string";
            default:
                return "Default";
        }
    }

    public async Task<string> HttpClientCallExampleAsync()
    {
        var client = _httpClientFactory.CreateClient();
        try
        {
            var response = await client.GetAsync("https://www.google.com");
            return $"Status: {response.StatusCode}";
        }
        catch (Exception ex)
        {
            return $"Error: {ex.Message}";
        }
    }

    public async Task<string> RefitCallExampleAsync()
    {
        try
        {
            var response = await _apiService.GetHomePage();
            return $"Refit Success: {response.Length} chars";
        }
        catch (Exception ex)
        {
            return $"Refit Error: {ex.Message}";
        }
    }

    public async Task<string> FlurlCallExampleAsync()
    {
        try
        {
            var response = await "https://www.google.com".GetStringAsync();
            return $"Flurl Success: {response.Length} chars";
        }
        catch (Exception ex)
        {
            return $"Flurl Error: {ex.Message}";
        }
    }
}