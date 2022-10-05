import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  public user={
    email:"",
    password:""
  }

  public Error ='';
  public Success ='';
  public Identity = '';
  public token = '';

  onSubmit(){
    console.log(this.user);
    this. _userService.Login(this.user).subscribe(
      res=>{
        this.Success = "Bienvenido " + res.user.name;

        this.Identity = res.user;
        localStorage.setItem('identity', JSON.stringify(this.Identity));

        this._userService.Login(this.user, true).subscribe(
          res =>{
            console.log(res);
            this._router.navigate(['home']);
          }
        )
      },
      err=>{
        console.log(err);
        this.Error = err.error.message;
      }
    )
  }
  constructor(private _userService: UserService, private _router:Router) { }

  

  ngOnInit(): void {
  }



}
