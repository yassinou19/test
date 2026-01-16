using Microsoft.AspNetCore.Mvc;
using testing.Services;

namespace testing.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SyntaxNodeExamplesController : ControllerBase
{
    private readonly ISyntaxNodeExamplesService _examplesService;

    public SyntaxNodeExamplesController(ISyntaxNodeExamplesService examplesService)
    {
        _examplesService = examplesService;
    }

    [HttpGet("goto/1")]
    public IActionResult GotoStatementExample1()
        => Ok(_examplesService.GotoStatementExample1());

    [HttpGet("goto/2")]
    public IActionResult GotoStatementExample2()
        => Ok(_examplesService.GotoStatementExample2());

    [HttpGet("labeled/1")]
    public IActionResult LabeledStatementExample1()
        => Ok(_examplesService.LabeledStatementExample1());

    [HttpGet("labeled/2")]
    public IActionResult LabeledStatementExample2()
        => Ok(_examplesService.LabeledStatementExample2());

    [HttpGet("local-function/1")]
    public IActionResult LocalFunctionStatementExample1()
        => Ok(_examplesService.LocalFunctionStatementExample1());

    [HttpGet("local-function/2")]
    public IActionResult LocalFunctionStatementExample2()
        => Ok(_examplesService.LocalFunctionStatementExample2());

    [HttpGet("lock/1")]
    public IActionResult LockStatementExample1()
        => Ok(_examplesService.LockStatementExample1());

    [HttpGet("lock/2")]
    public IActionResult LockStatementExample2()
        => Ok(_examplesService.LockStatementExample2());

    [HttpGet("throw/1")]
    public IActionResult ThrowExpressionExample1([FromQuery] string? input)
        => Ok(_examplesService.ThrowExpressionExample1(input));

    [HttpGet("throw/2")]
    public IActionResult ThrowExpressionExample2([FromQuery] string? input)
        => Ok(_examplesService.ThrowExpressionExample2(input));

    [HttpGet("using-statement/1")]
    public IActionResult UsingStatementExample1()
        => Ok(_examplesService.UsingStatementExample1());

    [HttpGet("using-statement/2")]
    public IActionResult UsingStatementExample2()
        => Ok(_examplesService.UsingStatementExample2());

    [HttpGet("using-declaration")]
    public IActionResult UsingDeclarationExample()
        => Ok(_examplesService.UsingDeclarationExample());

    [HttpGet("yield/1")]
    public IActionResult YieldStatementExample1()
        => Ok(_examplesService.YieldStatementExample1());

    [HttpGet("yield/2")]
    public IActionResult YieldStatementExample2()
        => Ok(_examplesService.YieldStatementExample2());

    [HttpGet("anonymous-method")]
    public IActionResult AnonymousMethodExpressionExample()
        => Ok(_examplesService.AnonymousMethodExpressionExample());

    [HttpGet("lambda/parenthesized")]
    public IActionResult ParenthesizedLambdaExpressionExample()
        => Ok(_examplesService.ParenthesizedLambdaExpressionExample());

    [HttpGet("lambda/simple")]
    public IActionResult SimpleLambdaExpressionExample()
        => Ok(_examplesService.SimpleLambdaExpressionExample());

    [HttpGet("switch-expression/{value:int}")]
    public IActionResult SwitchExpressionExample(int value)
        => Ok(_examplesService.SwitchExpressionExample(value));

    [HttpPost("break-continue")]
    public IActionResult BreakContinueLoopExample([FromBody] int[] items)
        => Ok(_examplesService.BreakContinueLoopExample(items));

    [HttpGet("switch-fallthrough/{value:int}")]
    public IActionResult SwitchFallthroughGotoExample(int value)
        => Ok(_examplesService.SwitchFallthroughGotoExample(value));

    [HttpGet("task-when-all")]
    public IActionResult TaskWhenAllExample()
        => Ok(_examplesService.TaskWhenAllExample());
}