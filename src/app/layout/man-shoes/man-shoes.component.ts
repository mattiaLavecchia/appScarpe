import { Component, OnInit } from '@angular/core';
import { Shoe } from 'src/app/model/shoes.model';
import { ShoesService } from 'src/app/layout/service/shoes.service';

@Component({
  selector: 'app-man-shoes',
  templateUrl: './man-shoes.component.html',
  styleUrls: ['./man-shoes.component.scss']
})
export class ManShoesComponent implements OnInit {
  shoes: Shoe[] = [];

  constructor(public shoesService : ShoesService) { }

  ngOnInit(): void {
    this.shoes = this.shoesService.getShoesList();
  }


  addCartShoe(i:number): void{
    this.shoesService.addcartList(this.shoes[i])
  }

}
