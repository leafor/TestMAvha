export class Tarea {
    id: number;
    descripcion: string;
    estado: boolean;
    imagen: string;
    constructor() {
        this.estado = false;
        this.descripcion = '';
        this.imagen = '';
    }
}
