export class Tarea {
    id: number;
    descripcion: string;
    estado: boolean;
    imagen: any;
    constructor() {
        this.estado = false;
        this.descripcion = '';
        this.imagen = '';
    }
}
