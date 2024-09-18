//Clase abstracta que representa una notificaion general
//que contiene el medio por el que se envia
abstract class Notificacion {
    protected Medio medio;

    protected Notificacion(Medio m){
        this.medio = m;
    }

    abstract void enviar(String msj);   
}
