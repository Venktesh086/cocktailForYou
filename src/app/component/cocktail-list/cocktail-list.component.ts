import { Component } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktail-list',
  imports: [CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})
export class CocktailListComponent {
  cartItems:any=[];
  images=this.cartItems;
  total = 0;
  constructor(private cartService: CocktailService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    console.log(this.cartItems,'cartitems');
    this.calculateTotal();
  }

  updateQuantity(id: number, quantity: number) {
    if (quantity > 0) {
      this.cartService.updateQuantity(id, quantity);
      this.calculateTotal();
    }
  }

  removeItem(id: number) {
    this.cartService.removeItem(id);
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartService.calculateTotal();
  }

  checkout() {
    console.log('JSON Response:', this.cartItems);
  }

}
