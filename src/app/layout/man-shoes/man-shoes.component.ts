import { Component, OnInit } from '@angular/core';
import { Shoe } from 'src/app/model/shoes.model';
import { ShoesService } from 'src/app/shared/shoes.service';

@Component({
  selector: 'app-man-shoes',
  templateUrl: './man-shoes.component.html',
  styleUrls: ['./man-shoes.component.scss']
})
export class ManShoesComponent implements OnInit {
  number: string = '';
  shoes: Shoe[] = [];

  constructor(public shoesService : ShoesService) { }

  ngOnInit(): void {
    this.shoes = this.shoesService.getShoesList();
  }

  numberShoes = [
    {value: '38'},
    {value: '39'},
    {value: '40'},
    {value: '41'},
    {value: '42'},
    {value: '43'},
  ];

  addCartShoe(i:number): void{
    this.shoesService.addcartList(this.shoes[i])
  }

}
