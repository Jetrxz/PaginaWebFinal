export class Ubicacion_PedidoModel {
  direccion: string;
  latitud: number;
  longitud: number;
  referencia: string;

  constructor() {
    this.direccion = "";
    this.latitud = 0;
    this.longitud = 0;
    this.referencia = "";
  }
}
