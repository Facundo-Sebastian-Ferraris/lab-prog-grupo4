package patronNuevo;
public class Correo implements Medio {
    public void enviarMensaje(String msj){
        //implementacion para enviar la notificacion por correo
        System.out.println("Se envia un correo: "+msj);
    }
}
