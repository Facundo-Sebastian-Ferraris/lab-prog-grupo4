package patronNuevo;
public class Alerta extends Notificacion{
    public Alerta(Medio medio){
        super(medio);
        //si alerta inicializa algo diferente iría acá
    }

    @Override
    void enviar(String msj){
        //se envia una alerta utilizando el medio
        medio.enviarMensaje("Esto es una alerta: "+msj);
    }
}
