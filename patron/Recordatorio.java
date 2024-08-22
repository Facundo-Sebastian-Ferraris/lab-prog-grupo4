public class Recordatorio extends Notificacion{
    public Recordatorio(Medio medio){
        super(medio);
    }

    @Override
    void enviar(String msj){
        medio.enviarMensaje("Esto es un recordatorio: "+msj);
    }
}
