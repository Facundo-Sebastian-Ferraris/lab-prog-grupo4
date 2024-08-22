
import java.util.Calendar;
import patron;

public class GestorServidor implements Runnable {

    private Servidor servidor;

    public GestorServidor(Servidor ser) {
        this.servidor = ser;
    }

    @Override
    public void run() {
        this.servidor.cambiarEstado();

        String mensaje = "Gestor: Estado del servidor actualizado" + " Tiempo Actual : "
        + Calendar.getInstance().get(Calendar.SECOND);

        Medio email = new Correo();

        Notificacion alerta = new Alerta(email);
         alerta.enviar(mensaje);

    }
}
