using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using netcore.Models;

namespace netcore.Migrations
{
    [DbContext(typeof(ProdutoContext))]
    partial class ProdutoContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ChangeDetector.SkipDetectChanges", "true")
                .HasAnnotation("ProductVersion", "1.1.1");
        }
    }
}
