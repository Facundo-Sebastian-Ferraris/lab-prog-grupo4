package patronNuevo;


public class Test {
    public static void main(String[] args) {
        Medio email = new Correo();
        Medio sms = new Mensajetxt();

        Notificacion alerta = new Alerta(email);
        Notificacion record = new Recordatorio(sms);

        alerta.enviar("Servidor caido");
        record.enviar("Reunion mañana a las 10");
    }
}
