using Microsoft.EntityFrameworkCore;

namespace netcore.Models{

public class ProdutoContext : DbContext{
public ProdutoContext(DbContextOptions<ProdutoContext> options) : base(options){

}
public DbSet<Produto>Produtos{get;set;}

}

}
