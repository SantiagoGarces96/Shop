import { Component, OnInit } from '@angular/core';
import { global } from 'src/app/services/GLOBAL';
import {ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styles: [
  ]
})
export class EditProductoComponent implements OnInit {
  public file: any;
  public imgSelect: any;
  public url;
  public producto = {
    IdCat: {_id:"", name:""},
    nombre: "",
    vencimiento: "",
    cantidad: 0,
    precio: 0,
    image: "default.png"
  };
  public categorias: any;
  public id: any;
  constructor(
    private route: ActivatedRoute,
    private _productosService: ProductosService,
    private Router: Router) {
    this.url = global.url;
  }

  ngOnInit(): void {
    this._productosService.getCategorias().subscribe(
      res=>{
        console.log(res);
        this.categorias = res.categorias;
      }
    );
    this.route.params.subscribe(
      params=>{
        this.id = params['id'];
        this._productosService.getProducto(this.id).subscribe(
          res=>{
          console.log(res);
          this.producto= res.producto;
          }
        )
    }
    );
  }

  onSubmit(form:any):void {
    if (form.valid){
    console.log(form.value);
      this._productosService.EditarProducto(this.id, {
        nombre: form.value.nombre,
        precio: form.value.precio,
        cantidad: form.value.cantidad,
        vencimiento: form.value.vencimiento,
        IdCat: form.value.IdCat,
        image: this.file
      }).subscribe(
        res=>{
          console.log(res);
          window.history.back();
        }
      )
    }
  }



  imgSelected(event:any) {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imgSelect = reader.result;
      reader.readAsDataURL(this.file);
       console.log(this.file);

    }
  }

volver(): void {
  window.history.back();
}

}
