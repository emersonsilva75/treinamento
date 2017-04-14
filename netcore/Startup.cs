using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using netcore.Models;


namespace netcore
{
    public class Startup
    {

public void ConfigureService(IServiceCollection service){
    service.AddMvc();
    service.AddDbContext<ProdutoContext>(
        options => options.UseMySql("server=127.0.0.1;database=banco;uid=root;pwd=root;")
    );

}

public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory log){
app.UseDeveloperExceptionPage();

var DB = app.ApplicationServices.GetRequiredService<ProdutoContext>();
DB.Database.EnsureCreated();

app.UseMvcWithDefaultRoute();
}

    }
}