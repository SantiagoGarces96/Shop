import { Component, OnInit } from '@angular/core';
import { global } from 'src/app/services/GLOBAL';
import { ProductosService } from 'src/app/services/productos.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styles: [
  ]
})
export class CreateProductoComponent implements OnInit {
  public file: any;
  public imgSelect: any;
  public url;
  public producto = {
    IdCat: "",
    nombre: "",
    vencimiento: "",
    cantidad: 0,
    precio: 0
  };
  public categorias: any;
  constructor(
    private _productosService: ProductosService) {
    this.url = global.url;
  }

  ngOnInit(): void {
    this._productosService.getCategorias().subscribe(
      res=>{
        console.log(res);
      this.categorias = res.categorias
    }
    );
  }

  onSubmit(form:any):void {
    if (form.valid){
    console.log(form.value);
      this._productosService.insertarProducto({
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
