import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/authGuard/auth.guard";
import { MaterialModule } from "../shared/material.module";

import { HomeComponent } from "./home/home.component";
import { ManShoesComponent } from "./man-shoes/man-shoes.component";
import { SaleShoesComponent } from "./sale-shoes/sale-shoes.component";
import { ShopComponent } from "./shop/shop.component";
import { WomanShoesComponent } from "./woman-shoes/woman-shoes.component";

const routes: Routes = [
    {path:'manShoes', component: ManShoesComponent},
    {path:'womanShoes', component: WomanShoesComponent},
    {path:'saleShoes', component: SaleShoesComponent},
    {path:'shoppingBag', canActivate: [AuthGuard], component: ShopComponent},
]

@NgModule({
    declarations: [
        SaleShoesComponent,
        ManShoesComponent,
        WomanShoesComponent,
        ShopComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class LayoutModule{}