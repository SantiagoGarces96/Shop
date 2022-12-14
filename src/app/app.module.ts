import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from  '@angular/common/http'
import { UserService } from './services/user.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateProductoComponent } from './components/create-producto/create-producto.component';
import { EditProductoComponent } from './components/edit-producto/edit-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    CreateProductoComponent,
    EditProductoComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
