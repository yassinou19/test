namespace testing.Interfaces;

public interface IListener<T>
{
    void OnNotify(T message);
    void OnClose(T message);
}
