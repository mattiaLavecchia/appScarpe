import { Component, OnInit } from '@angular/core';
import { Shoe } from 'src/app/model/shoes.model';
import { ShoesService } from 'src/app/layout/service/shoes.service';

@Component({
  selector: 'app-sale-shoes',
  templateUrl: './sale-shoes.component.html',
  styleUrls: ['./sale-shoes.component.scss']
})
export class SaleShoesComponent implements OnInit {

  shoesSale: Shoe[] = []

  constructor(private shoesService: ShoesService) { }

  ngOnInit(): void {
   this.shoesSale = this.shoesService.getsaleShoes();
  }

  addShopList(i:number){
    this.shoesService.addcartList(this.shoesSale[i]);
  }

}
