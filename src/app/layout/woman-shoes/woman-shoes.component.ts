import { Component, OnInit } from '@angular/core';
import { Shoe } from 'src/app/model/shoes.model';
import { ShoesService } from 'src/app/layout/service/shoes.service';

@Component({
  selector: 'app-woman-shoes',
  templateUrl: './woman-shoes.component.html',
  styleUrls: ['./woman-shoes.component.scss']
})
export class WomanShoesComponent implements OnInit {

  shoes: Shoe[] = [];

  constructor(private shoesService: ShoesService) { }


  ngOnInit(): void {
    this.shoes= this.shoesService.getShoesList();
  }

  number: string = '';

  numberShoes = [
    {value: '38'},
    {value: '39'},
    {value: '40'},
    {value: '41'},
    {value: '42'},
    {value: '43'},
  ];

  addCartList(i:number){  
    this.shoesService.addcartList(this.shoes[i]);
  }

}
