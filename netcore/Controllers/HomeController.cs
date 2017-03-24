using Microsoft.AspNetCore.Mvc;
using netcore.Models;
using System;
using System.Collections.Generic;

namespace netcore.Controllers
{
    [RouteAttribute("api")]
public class HomeController : Controller
{
    [HttpGetAttribute]
    public IEnumerable<Produto> Index(){
    var lista = new List<Produto>
    }

[HttpPostAttribute]
public int Insert([FromBodyAttribute] Produto produto){
using(var db = new  ProdutoContext()){
    db.Produtos.Add(produto);
    db.SaveChanges();
}
}

}
}