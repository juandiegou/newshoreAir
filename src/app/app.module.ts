import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponent } from './modules/flight/flight.component';

import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HomeComponent } from './templates/home/home.component';
import { CurrencyConversionPipe } from './pipes/currency-conversion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CurrencyConversionPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
