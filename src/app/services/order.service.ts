import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PedidoProductoModel } from '../models/pedidoproducto.model';
import { PedidosModel } from '../models/pedidos.model';
import { Ubicacion_PedidoModel } from '../models/ubicacionpedido.model';
import { UbicacionService } from './ubicacion.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = 'http://localhost:7139';
  constructor(private http: HttpClient, private ubicacionService: UbicacionService) { }

  submitOrder(pedidoData: PedidosModel, latitud: number, longitud: number) {
    let pedido_productos: PedidoProductoModel[] = [];
    let direccion: Ubicacion_PedidoModel = {
      latitud: latitud,
      longitud: longitud,
      direccion: '',
      referencia: ''
    }
    this.ubicacionService.saveAddress(direccion).subscribe((ubicacionId) => {
      pedidoData.direccionId = ubicacionId;
      for (let product of pedidoData.pedidoProductos) {
        let pedido_producto: PedidoProductoModel = {
          pedidoProductoId: 0,
          pedidoId: pedidoData.pedidoId,
          cantidad: product.cantidad,
          totalProducto: product.totalProducto,
          productoId: product.productoId
        };
        pedido_productos.push(pedido_producto);
      }
      let pedido = {
        FechaPedido: pedidoData.fechaPedido,
        FechaEntrega: pedidoData.fechaEntrega,
        Direccion: pedidoData.direccionId,
        Total: pedidoData.total,
        EstadoId: pedidoData.estadoId,
        ClienteId: pedidoData.clienteId,
        Pedido_Productos: pedido_productos
      };
      return this.http.post<PedidosModel>('http://localhost:7139/api/pedidos', pedido);
    })
  }
  getOrders() {
    return this.http.get(`${this.url}/Pedidos`);
  }
  getOrder(id: number) {
    return this.http.get(`${this.url}/Pedidos/${id}`);
  }
  deleteOrder(id: number) {
    return this.http.delete(`${this.url}/Pedidos/${id}`);
  }
}

