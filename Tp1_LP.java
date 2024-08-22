
import java.util.Calendar;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

/**
 *
 * @author sthefany
 */
public class Tp1_LP {

    public static void main(String[] args) {
        ScheduledExecutorService ejecutor = Executors.newScheduledThreadPool(2);

        Servidor servidor = new Servidor();

        GestorServidor gestor = new GestorServidor(servidor);
        MonitorServidor monitor = new MonitorServidor(servidor);

        System.out.println("Tiempo Actual : " + Calendar.getInstance().get(Calendar.SECOND));

        // Programar gestor para que se ejecute cada 10 segundos
        ejecutor.scheduleAtFixedRate(gestor, 0, 4, TimeUnit.SECONDS);

        // Programar monitor para que se ejecute cada 3 segundos
        ejecutor.scheduleAtFixedRate(monitor, 0, 6, TimeUnit.SECONDS);
        try {
            Thread.sleep(60000);
        } catch (InterruptedException e) {
        }

        ejecutor.shutdown();
    }
}
