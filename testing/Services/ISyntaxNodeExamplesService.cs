using System.Collections.Generic;
using System.Threading.Tasks;

namespace testing.Services;

public interface ISyntaxNodeExamplesService
{
    string GotoStatementExample1();
    string GotoStatementExample2();

    string LabeledStatementExample1();
    string LabeledStatementExample2();

    string LocalFunctionStatementExample1();
    string LocalFunctionStatementExample2();

    string LockStatementExample1();
    string LockStatementExample2();

    string ThrowExpressionExample1(string? input);
    string ThrowExpressionExample2(string? input);

    string UsingStatementExample1();
    string UsingStatementExample2();

    string UsingDeclarationExample();

    IEnumerable<int> YieldStatementExample1();
    IEnumerable<int> YieldStatementExample2();

    string AnonymousMethodExpressionExample();
    string ParenthesizedLambdaExpressionExample();
    string SimpleLambdaExpressionExample();

    string SwitchExpressionExample(int value);
    string BreakContinueLoopExample(int[] items);
    string SwitchFallthroughGotoExample(int value);
    string TaskWhenAllExample();

    string ForEachVariableStatementExample();
    string SwitchStatementWithGuardsExample(object input);
    Task<string> HttpClientCallExampleAsync();
    Task<string> RefitCallExampleAsync();
    Task<string> FlurlCallExampleAsync();
}