namespace testing.Models;

public class SyntaxNodeDefinition
{
    public int Id { get; set; }
    //ok
    public string Name { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public string Example { get; set; } = string.Empty;
}