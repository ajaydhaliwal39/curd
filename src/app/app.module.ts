import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MerchnatRoutingModule } from './merchnat/merchnat-routing.module';
import { MerchnatModule } from './merchnat/merchnat.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material/material.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MerchnatModule,
    MerchnatRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

