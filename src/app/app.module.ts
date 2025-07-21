import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './sevices/product.service';
import { OrderFormComponent } from './components/order-form/order.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent, FooterComponent, CardComponent, OrderFormComponent],
    imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
    providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }