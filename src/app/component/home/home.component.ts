import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Drink, DrinksResponse } from '../../cocktail.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  popularDrinks: any[]=[];
  specialOffers: any[]=[];
  newArrival: any[]=[];

 
  constructor(private cartService: CocktailService, public router:Router) {}

  addToCart(item: any) {
    this.cartService.addToCart({ ...item, quantity: 1 });
  }

  productDetails(item: Drink) {
  
    const itemString = encodeURIComponent(JSON.stringify(item))
    this.router.navigateByUrl(`/product/?item=${itemString}`);

  }
ngOnInit(): void {
  this.cartService.cocktailApiCall().subscribe((res: DrinksResponse)=>{
    this.popularDrinks=res.drinks.slice(0, 4);
    this.specialOffers=res.drinks.slice(2,6);
    this.newArrival = [...res.drinks.slice(0, 2), ...res.drinks.slice(-2)];
    console.log(res,'result');
      })
}
}
