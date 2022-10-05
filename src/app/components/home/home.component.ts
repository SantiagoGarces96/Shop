import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  public identity: any;
  public token: any;

  constructor(
    private _userService: UserService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    console.log(this.token);
    console.log(this.identity);
    
    if (this.identity == null){
      this.route.navigate(['/login']);
    }
  }

}
