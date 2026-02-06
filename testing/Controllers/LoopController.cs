using Microsoft.AspNetCore.Mvc;

public class LoopController : ControllerBase
{
    private readonly Service _service;

    public LoopController(Service service)
    {
        _service = service;
    }

    public void TestWhile()
    {
        _service.DoWork();
        while (_service.HasNext())
        {
            _service.DoWork();
        }
    }

    public void TestFor()
    {
        for (int i = 0; _service.ShouldContinue(i); i++)
        {
            _service.DoWork();
        }
    }
}