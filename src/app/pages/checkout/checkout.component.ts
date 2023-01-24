import { UbicacionService } from './../../services/ubicacion.service';
import { OrderService } from './../../services/order.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Ubicacion_PedidoModel } from 'src/app/models/ubicacionpedido.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: any;
  userData: any;
  latitud: number = 0;
  longitud: number = 0;

  constructor(
    public userService: UserService,
    private router: Router,
    public orderService: OrderService,
    public ubicacionService :UbicacionService
  )
  {
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
  onMapClick(event:any) {
    this.latitud = event.coords.lat;
    this.longitud = event.coords.lng;
  }
}
