import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Shoe } from 'src/app/model/shoes.model';
import { ShoesService } from 'src/app/layout/service/shoes.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  card: Shoe[];
  private subscription: Subscription

  constructor(private shoesService: ShoesService) { }

  ngOnInit(): void {
    this.card = this.shoesService.getCartList();
    this.subscription = this.shoesService.cartChange.subscribe((cart: Shoe[]) => {
      this.card = cart;
    });
  }

  


}
