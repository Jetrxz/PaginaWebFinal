export class Ubicacion_PedidoModel {
  direccionId: number;
  direccion: string;
  latitud: number;
  longitud: number;
  referencia: string;

  constructor() {
    this.direccionId = 0;
    this.direccion = "";
    this.latitud = 0;
    this.longitud = 0;
    this.referencia = "";
  }
}
