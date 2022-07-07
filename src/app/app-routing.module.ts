import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ManShoesComponent } from './layout/man-shoes/man-shoes.component';
import { SaleShoesComponent } from './layout/sale-shoes/sale-shoes.component';
import { WomanShoesComponent } from './layout/woman-shoes/woman-shoes.component';
import{ ShopComponent} from './layout/shop/shop.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/authGuard/auth.guard';

const routes: Routes = [
 {path:'', component: HomeComponent},
 {path:'manShoes', component: ManShoesComponent},
 {path:'womanShoes', component: WomanShoesComponent},
 {path:'saleShoes', component: SaleShoesComponent},
 {path:'shoppingBag', canActivate: [AuthGuard], component: ShopComponent},
 {path:'SignUp-Login', component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
