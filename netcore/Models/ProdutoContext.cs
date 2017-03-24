using Microsoft.EntityFrameworkCore;

namespace netcore.Models{

public class ProdutoContext : DbContext{
    protected override void OnConfiguring(DbContextOptionsBuilder option){
        option.UseSqlite("filename=./superbanco");
    }


}

}
