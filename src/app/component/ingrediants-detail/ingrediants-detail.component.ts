import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-ingrediants-detail',
  imports: [],
  templateUrl: './ingrediants-detail.component.html',
  styleUrl: './ingrediants-detail.component.css'
})
export class IngrediantsDetailComponent {
  product: any = {};
  quantity = 1;
  item: any;

  constructor(private route: ActivatedRoute, private cartService: CocktailService) {}

  ngOnInit() {
  
     this.route.queryParams.subscribe((params)=>{
      const itemString = params['item'];
      console.log(itemString,'itemstring');
      if (itemString) {
        this.item = JSON.parse(decodeURIComponent(itemString));
      }
      this.product = {
        idDrink: this.item.idDrink,
        strDrink: this.item.strDrink,
        price: '399',
        strDrinkThumb: this.item.strDrinkThumb,
        strInstructions: this.item.strInstructions,
        strAlcoholic: this.item.strAlcoholic
      };
     
    });
   
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart() {
    this.cartService.addToCart({ ...this.product, quantity: this.quantity });
  }
}
