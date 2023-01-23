import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PedidoProductoModel } from '../models/pedidoproducto.model';
import { PedidosModel } from '../models/pedidos.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = 'http://localhost:7139';
  constructor(private http: HttpClient) { }
  // Método para enviar un nuevo pedido


  submitOrder(pedidoData: PedidosModel) {
    // Crea una variable para almacenar los productos del pedido
    let pedido_productos: PedidoProductoModel[] = [];

    // Itera sobre los productos en el carrito
    for (let product of pedidoData.pedidoProductos) {
      // Crea una variable para almacenar la información del producto
      let pedido_producto: PedidoProductoModel = {
        pedidoProductoId: 0,
        pedidoId: pedidoData.pedidoId,
        cantidad: product.cantidad,
        totalProducto: product.totalProducto,
        productoId: product.productoId
      };

      // Añade el producto al array
      pedido_productos.push(pedido_producto);
    }
    // Crea un objeto para enviar a la API
    let pedido = {
      FechaPedido: pedidoData.fechaPedido,
      FechaEntrega: pedidoData.fechaEntrega,
      Direccion: pedidoData.direccionId,
      Total: pedidoData.total,
      EstadoId: pedidoData.estadoId,
      ClienteId: pedidoData.clienteId,
      Pedido_Productos: pedido_productos
    };
    // Envia el pedido a la API
    return this.http.post<PedidosModel>('http://localhost:7139/api/pedidos', pedido);
  }

  // Método para obtener todos los pedidos
  getOrders() {
    return this.http.get(`${this.url}/Pedidos`);
  }

  // Método para obtener un pedido específico
  getOrder(id:number) {
    return this.http.get(`${this.url}/Pedidos/${id}`);
  }

  // Método para eliminar un pedido
  deleteOrder(id:number) {
    return this.http.delete(`${this.url}/Pedidos/${id}`);
  }
}
