import { Injectable } from '@angular/core';
import { Cocktail, DrinksResponse } from '../cocktail.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }
  private cartItems: Cocktail[] = [];

  getCartItems(): Cocktail[] {
    return this.cartItems;
  }

  addToCart(item: Cocktail) {
    const existingItem = this.cartItems.find(i => i.idDrink === item.idDrink);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cartItems.push(item);
    }
  }

  updateQuantity(id: number, quantity: number) {
    const item = this.cartItems.find(i => i.idDrink === id);
    if (item) {
      item.quantity = quantity;
    }
  }

  removeItem(id: number) {
    this.cartItems = this.cartItems.filter(i => i.idDrink !== id);
  }

  calculateTotal() {
    return this.cartItems.reduce((total, item) => total + (399) * item.quantity, 0);
  }
  cocktailApiCall(): Observable<DrinksResponse> {
    return this.http.get<DrinksResponse>('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Margarita');
  }
}
