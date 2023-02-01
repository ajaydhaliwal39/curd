import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MerchnatRoutingModule } from './merchnat-routing.module';
import { AddEditMerchantComponent } from './add-edit-merchant/add-edit-merchant.component';
import { ListMerchantComponent } from './list-merchant/list-merchant.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [
    AddEditMerchantComponent,
    ListMerchantComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MerchnatRoutingModule,
    MerchnatRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
    
  
  
  ]
})
export class MerchnatModule { }
