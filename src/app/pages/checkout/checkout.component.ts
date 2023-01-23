import { OrderService } from './../../services/order.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { PedidosModel } from 'src/app/models/pedidos.model';
import { PedidoProductoModel } from 'src/app/models/pedidoproducto.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<any>();
  checkoutForm: any;
  userData: any;
  constructor(public userService: UserService, private router: Router, public orderService: OrderService) {
    this.checkoutForm = new FormGroup({
      'nombres': new FormControl(''),
      'apellidos': new FormControl(''),
      'celular': new FormControl('')
    });
    this.userData = {
      nombres: '',
      apellidos: '',
      celular: ''
    };
  }
  ngOnInit(): void {
    this.userService.reloadUser();
    if (this.userService.isUserLoggedIn.getValue()) {
      this.router.navigate(['checkout']);
      const user = localStorage.getItem('user');
      if (user) {
        let parsedUser = JSON.parse(user);
        this.userData.nombres = parsedUser.nombres;
        this.userData.apellidos = parsedUser.apellidos;
        this.userData.celular = parsedUser.celular;
        this.checkoutForm.controls.nombres.setValue(this.userData.nombres);
        this.checkoutForm.controls.apellidos.setValue(this.userData.apellidos);
        this.checkoutForm.controls.celular.setValue(this.userData.celular);
      }
    }
  }
  redirectToSignUp() {
    this.router.navigate(['account']);
  }
  submitOrder() {
    // Obtén los productos en el carrito
    const cart = localStorage.getItem('cart');
    if (cart && cart !== '') {
      const cartItems = JSON.parse(cart);
      // Crea un objeto para enviar al servidor con los datos del formulario y los productos en el carrito
      let pedido = new PedidosModel();
      pedido.fechaPedido = new Date();
      pedido.fechaEntrega = new Date();
      // pedido.direccionEnvio = FormData.direccion;
      pedido.total = cartItems.totalPrice;
      pedido.estadoId = 1;
      pedido.clienteId = 1;
      pedido.pedidoProductos = [];
      for (let product of cartItems.items) {
        let pedido_producto = new PedidoProductoModel();
        pedido_producto.cantidad = product.quantity;
        pedido_producto.totalProducto = product.price * product.quantity;
        pedido_producto.productoId = product.productId;
        pedido.pedidoProductos.push(pedido_producto);
      }
      // Utiliza un servicio HTTP para enviar la orden al servidor
      this.orderService.submitOrder(pedido).subscribe((response) => {
        // Maneja la respuesta del servidor
        console.log(response);
      }, (error) => {
        // Maneja el error
        console.log(error);
      });
    } else {
      console.log('No hay productos en el carrito');
    }

  }
}
