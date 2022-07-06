import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Shoe } from '../model/shoes.model';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

cartChange = new Subject<Shoe[]>();

  constructor(private authService: AuthService) { }

  cart: Shoe[] = [
    {id:'1', name:'Nike Free TR', price:'$119.99',imagePath:"../../assets/img/women1.png", gender:'women',sale:true},
  ]

  shoes: Shoe[] = [
    {id:'1', name:'Nike Free TR', price:'$119.99',imagePath:"../../assets/img/women1.png",gender:'women'},
    {id:'2', name:'Nike GS Pink', price:'$129.99',imagePath:"../../assets/img/women3.png",gender:'women'},
    {id:'3', name:'Nike GS Pink', price:'$129.99',imagePath:"../../assets/img/women3.png",gender:'women'},
  ]

  saleShoe: Shoe[] = [
    {id:'1', name:'Nike Jordan',price:'$150.99',imagePath:'../../assets/img/featured1.png',gender:'man'},
    {id:'2',name: 'Jordan Air 1', price:'$139,99', imagePath:'../../assets/img/featured2.png',gender:'man'},
    {id:'3', name: 'Jordan Air 2', price: '$140.99', imagePath:'../../assets/img/featured3.png',gender:'man'}
  ]

  getShoesList(){
    return this.shoes.slice();
  }

  getsaleShoes(){
    return this.saleShoe.slice()
  }

  getCartList(){
   return this.cart.slice();
  }

  addcartList(shoe:Shoe){
    this.cart.push(shoe);
    this.cartChange.next(this.cart.slice());
  }

}
