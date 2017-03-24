using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;


namespace netcore
{
    public class Startup
    {

public void ConfigureService(IServiceCollection service){
    service.AddMvc();

}

public void Configure(IApplicationBuilder app, IHostingEnvironment env){
app.UseDeveloperExceptionPage();
app.UseMvcWithDefaultRoute();
}

    }
}