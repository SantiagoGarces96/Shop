import { global } from './GLOBAL';
import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  public url;

  constructor(private _http:HttpClient) { 
    this.url = global.url;
  }
  getProductos(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', "application/json");
    return this._http.get(this.url + 'Allproductos', {headers: headers});
  }

  deleteProducto(id: string): Observable <any> {
    const headers = new HttpHeaders().set('Content-Type',  'application/json');
    return  this._http.delete(this.url + 'delete-producto/'+ id, {headers: headers});
  }

  getCategorias(): Observable <any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'categorias', {headers: headers});
  }

  insertarProducto(producto:any): Observable<any> {
    const fd = new FormData();
    console.log (producto);

    fd.append("nombre", producto.nombre);
    fd.append("precio", producto.precio);
    fd.append("image", producto.image);
    fd.append("vencimiento", producto.vencimiento);
    fd.append("cantidad", producto.cantidad);
    fd.append("IdCat", producto.IdCat);
    console.log(fd);

    return this._http.post(this.url + "producto", fd);
  }

}

