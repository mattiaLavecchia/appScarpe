import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject, tap } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { Shoe } from '../../model/shoes.model';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

cartChange = new Subject<Shoe[]>();

  constructor(private authService: AuthService, private http: HttpClient  ) { }

  private cart: Shoe[] = []

  private shoes: Shoe[] = [
    {id:'1', name:'Nike Free TR', price:'$119.99',imagePath:"../../assets/img/women1.png",gender:'women'},
    {id:'2', name:'Nike GS Pink', price:'$129.99',imagePath:"../../assets/img/women3.png",gender:'women'},
    {id:'3', name:'Nike GS Pink', price:'$129.99',imagePath:"../../assets/img/women3.png",gender:'women'},
  ]

  private saleShoe: Shoe[] = [
    {id:'1', name:'Nike Jordan',price:'$150.99',imagePath:'../../assets/img/featured1.png',gender:'man'},
    {id:'2',name: 'Jordan Air 1', price:'$139,99', imagePath:'../../assets/img/featured2.png',gender:'man'},
    {id:'3', name: 'Jordan Air 2', price: '$140.99', imagePath:'../../assets/img/featured3.png',gender:'man'}
  ]
  
  setCartList(){
    this.fetchCartShoe();
    this.cartChange.next(this.cart.slice());
  }

  getShoesList(){
    return this.shoes.slice();
  }

  getsaleShoes(){
    return this.saleShoe.slice();
  }

  getCartList(){
   this.fetchCartShoe();
   return this.cart.slice();
  }

  addcartList(shoe:Shoe){
     if(this.authService.user.value === null){
     return;
     }
    this.cartChange.next(this.cart.slice());
    this.storeCartShoe(shoe);
  }

  deleteShoes(index:number){
    this.cart.splice(index,1);
    this.cartChange.next(this.cart.slice());
    this.deleteOneShoe();
  }

   

  

  private deleteOneShoe(){
    const idUser =  this.authService.idUserDatabase;
    const cartShoe = this.cart;
    this.http.put(`https://progettoscarpeportfoglio-default-rtdb.firebaseio.com/cartShoe/${idUser}.json`,cartShoe)
    .subscribe()
  }


  private storeCartShoe(shoe: Shoe){
    if(this.authService.idUserDatabase === null) {
      return 
    }
    const idUser =  this.authService.idUserDatabase;
    const cartShoe = shoe;
    //DA AGGIUNGERE TIPO IL TOKEN MA PER LE INFORMAZIONI DELL'UTENTE E VEDERE ANCHE SE è UN NUOVO USER O NO
    this.http.post(`https://progettoscarpeportfoglio-default-rtdb.firebaseio.com/cartShoe/${idUser}.json`,cartShoe)
    .subscribe();
  }

  private fetchCartShoe(){
    if(this.authService.idUserDatabase === null) {
      return;
    }
    const idUser =  this.authService.idUserDatabase;
    this.http.get<Shoe[]>(`https://progettoscarpeportfoglio-default-rtdb.firebaseio.com/cartShoe/${idUser}.json`)
    .pipe(map(responseData => {
      const shoeArray: Shoe[] = [];
      for (const key in responseData){
        if(responseData.hasOwnProperty(key)){
          shoeArray.push({...responseData[key], id:key});
        };
      };
      return shoeArray;
    }))
    .subscribe(post => {
      this.cart= post;
    }
    )
  }


}
