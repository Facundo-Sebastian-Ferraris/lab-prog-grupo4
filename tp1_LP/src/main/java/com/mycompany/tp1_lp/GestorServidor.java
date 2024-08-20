
package com.mycompany.tp1_lp;

import java.util.Calendar;


public class GestorServidor implements Runnable{
    
    private Servidor servidor;
    
    
    
    public GestorServidor (Servidor ser){
        this.servidor = ser;
    }

    @Override
    public void run() {
        this.servidor.cambiarEstado();
        System.out.println("Estado del servidor actualizado"+ " Tiempo Actual : "
            + Calendar.getInstance().get(Calendar.SECOND));
    }  
}
