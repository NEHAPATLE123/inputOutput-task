import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './shared/components/child/child.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './shared/components/products/products.component';
import { ProductChildComponent } from './shared/components/product-child/product-child.component';
import { ChildParentComponent } from './shared/components/child-parent/child-parent.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ProductsComponent,
    ProductChildComponent,
    ChildParentComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
