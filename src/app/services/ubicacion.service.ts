import { Ubicacion_PedidoModel } from './../models/ubicacionpedido.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  private url = 'http://localhost:7139';

  constructor(private http: HttpClient) { }

  saveAddress(direccion: Ubicacion_PedidoModel) {
    return this.http.post(`${this.url}/Ubicacion_Pedido`, direccion).pipe(
      map((response: any) => response.direccionId)
    );
  }

  findAddressById(id: number) {
    return this.http.get(`${this.url}/Ubicacion_Pedido/${id}`);
  }

}
