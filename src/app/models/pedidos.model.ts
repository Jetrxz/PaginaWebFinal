import { ClienteModel } from "./cliente.model";
import { EstadoModel } from "./estado.model";
import { PedidoProductoModel } from "./pedidoproducto.model";
import { Ubicacion_PedidoModel } from "./ubicacionpedido.model";

export class PedidosModel {
  pedidoId: number;
  fechaPedido: Date;
  fechaEntrega: Date;
  direccionId: number;
  total: number;
  empleadoId: number;
  estadoId: number;
  clienteId: number;
  direccion: Ubicacion_PedidoModel;
  pedidoProductos: PedidoProductoModel[];
  estado: EstadoModel;
  cliente: ClienteModel;
  constructor() {
    this.pedidoId = 0;
    this.fechaPedido  = new Date(Date.now());
    this.fechaEntrega = new Date(Date.now());
    this.direccionId = 0;
    this.total = 0;
    this.empleadoId = 0;
    this.estadoId = 0;
    this.clienteId = 0;
    this.direccion = new Ubicacion_PedidoModel();
    this.pedidoProductos = [];
    this.estado = new EstadoModel();
    this.cliente = new ClienteModel();
  }
}
