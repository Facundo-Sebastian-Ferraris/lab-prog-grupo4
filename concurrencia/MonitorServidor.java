
import java.util.Calendar;
 

public class MonitorServidor implements Runnable {

    private Servidor servidor;

    public MonitorServidor(Servidor ser) {
        this.servidor = ser;
    }

    @Override
    public void run() {
        if (this.servidor.getEstado()) {
            System.out.println("Monitor: Servidor funcionando correctamente" + " Tiempo Actual : "
                    + Calendar.getInstance().get(Calendar.SECOND));
        } else {
            System.out.println("Monitor: Servidor no responde" + " Tiempo Actual : "
                    + Calendar.getInstance().get(Calendar.SECOND));
        }
    }
}
