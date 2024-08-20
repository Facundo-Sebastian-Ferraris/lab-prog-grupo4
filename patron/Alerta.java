public class Alerta extends Notificacion{
    public Alerta(Medio medio){
        super(medio);
    }

    @Override
    void enviar(String msj){
        //se envia una alerta
        medio.enviarMensaje("Esto es una alerta: "+msj);
    }
}
