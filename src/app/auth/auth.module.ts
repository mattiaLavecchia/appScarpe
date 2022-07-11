import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AlertComponent } from "../shared/alert/alert.component";
import { MaterialModule } from "../shared/material.module";
import { SharedModule } from "../shared/shared.module";
import { AuthComponent } from "./auth.component";


@NgModule({
    declarations: [AuthComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        SharedModule,
        RouterModule.forChild([ {path:'', component: AuthComponent}]) 
    ]
})
export class AuthModule{}