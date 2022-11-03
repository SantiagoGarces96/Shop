import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { global } from 'src/app/services/GLOBAL';
  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
]
})
export class HomeComponent implements OnInit {
  public identity: any;
  public token: any;
  public productos: any;
  public url;

  constructor(
    private _userService: UserService,
    private route: Router,
    private _productosService: ProductosService
  ) { 
    this.url = global.url;
  }

  ngOnInit(): void {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    console.log(this.token);
    console.log(this.identity);
    this.getProductos();
    if (this.identity == null){
      this.route.navigate(['/login']);
    }
  }

  getProductos(){
    this._productosService.getProductos().subscribe(
      res => {
        console.log(res);
        this.productos = res.productos;
  });
}

deleteProducto(id: string) {
  this._productosService.deleteProducto(id).subscribe(
    res=> {
      console.log (res);
      this.getProductos();
    });
  }

}
