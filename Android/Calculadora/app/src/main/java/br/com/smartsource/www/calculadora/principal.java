package br.com.smartsource.www.calculadora;

import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import net.objecthunter.exp4j.Expression;
import net.objecthunter.exp4j.ExpressionBuilder;

public class principal extends AppCompatActivity {

    /* Declarar variaveis da Calculadora  */

    String PegaVisor;
    private TextView Visor;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_principal);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        this.Visor = (TextView) findViewById(R.id.textVisor);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });
    }

    public void func9(View v) {
        PegaVisor = Visor.getText().toString();
        this.Visor.setText(PegaVisor + "9");
    }

    public void func8(View v) {
        PegaVisor = Visor.getText().toString();
        this.Visor.setText(PegaVisor + "8");
    }

    public void func7(View v) {
        PegaVisor = Visor.getText().toString();
        this.Visor.setText(PegaVisor + "7");
    }

     public void funcCE(View v) {
        PegaVisor = Visor.getText().toString();
        this.Visor.setText("");
         Toast.makeText(getApplicationContext(), "O visor está limpo !", Toast.LENGTH_SHORT).show();

     }

    public void funcIgual(View v) {

        PegaVisor = Visor.getText().toString();
        try {
            Expression e = new ExpressionBuilder(PegaVisor).build();
            double result = e.evaluate();
            String exibeResult = String.valueOf(result);
            this.Visor.setText(exibeResult);
        }catch (Exception ex) {

            AlertDialog alertDialog = new AlertDialog.Builder(this).create();
            alertDialog.setTitle("Erro!");
            alertDialog.setMessage("Verifique a expressão matemática utilizada!!");
            alertDialog.show();

        }
    }

    /* Sem GO Horse */

    public void func(View v) {
        Button b = (Button)v;
        PegaVisor = Visor.getText().toString();
        this.Visor.setText(PegaVisor + b.getText().toString());
    }










}
