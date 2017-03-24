using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using netcore.Models;

namespace netcore.Migrations
{
    [DbContext(typeof(ProdutoContext))]
    [Migration("20170316003810_minhamigracao")]
    partial class minhamigracao
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ChangeDetector.SkipDetectChanges", "true")
                .HasAnnotation("ProductVersion", "1.1.1");
        }
    }
}
