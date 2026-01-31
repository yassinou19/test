FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY ["testing.csproj", "./"]
RUN dotnet restore "testing.csproj"
COPY . .
RUN dotnet build "testing.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "testing.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .
EXPOSE 8089
ENV ASPNETCORE_URLS=http://+:8089
ENTRYPOINT ["dotnet", "testing.dll"]