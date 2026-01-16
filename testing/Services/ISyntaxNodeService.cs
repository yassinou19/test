using testing.Models;

namespace testing.Services;

public interface ISyntaxNodeService
{
    IReadOnlyList<SyntaxNodeDefinition> GetAll();
    SyntaxNodeDefinition? GetById(int id);
    SyntaxNodeDefinition? GetByName(string name);
    SyntaxNodeDefinition Add(SyntaxNodeDefinition definition);
}