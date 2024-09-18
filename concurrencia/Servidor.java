package concurrencia;

public class Servidor {

    private boolean estadoFuncionando;

    public Servidor() {
        this.estadoFuncionando = true;
    }

    public synchronized void cambiarEstado() {
        if (this.estadoFuncionando) {
            this.estadoFuncionando = false;
        } else {
            this.estadoFuncionando = true;
        }
    }

    public synchronized boolean getEstado() {
        return this.estadoFuncionando;
    }
}
