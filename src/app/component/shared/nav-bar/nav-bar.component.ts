import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(public router:Router){}
  ngOnInit() {
    
  }
  homePage(){
    this.router.navigate(['/']);
  }
  cartPage(){
    this.router.navigate(['/cart']);
  }

}
