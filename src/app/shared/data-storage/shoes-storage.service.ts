import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Shoe } from 'src/app/model/shoes.model';
import { ShoesService } from '../../layout/service/shoes.service';

@Injectable({
  providedIn: 'root'
})
export class ShoesStorageService {

  constructor(private http: HttpClient, private authService: AuthService) { }


  storeCartShoe(shoe: Shoe){
    if(this.authService.idUserDatabase === null) {
      return 
    }
    const idUser = this.authService.idUserDatabase;
    const cartShoe = shoe;
    //DA AGGIUNGERE TIPO IL TOKEN MA PER LE INFORMAZIONI DELL'UTENTE E VEDERE ANCHE SE è UN NUOVO USER O NO
    this.http.post(`https://progettoscarpeportfoglio-default-rtdb.firebaseio.com/cartShoe/${idUser}.json`,cartShoe)
    .subscribe(response => {
      console.log(response);
    });
  }

  fetchCartShoe(){
    if(this.authService.idUserDatabase === null) {
       
    }
    const idUser = this.authService.idUserDatabase;
    return this.http.get<Shoe[]>(`https://progettoscarpeportfoglio-default-rtdb.firebaseio.com/cartShoe/${idUser}.json`);
    //collegare questo nel nostro servizio di scarpe e poi li inserire le pipe per i dati che ci interessano come il ricevere direttamente che informazione ti serve.
    
  }

}
