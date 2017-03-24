using System;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace netcore
{
    class Program
    {
        static void Main(string[] args)
        {
           var host = new WebHostBuilder()
           .UseContentRoot(Directory.GetCurrentDirectory())
           .UseKestrel()
           .UseStartup<Startup>()
           .UseIISIntegration()
           .Build();

           host.Run();
        }
    }
}
