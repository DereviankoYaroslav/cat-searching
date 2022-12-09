import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DisplayPageComponent } from './components/display-page/display-page.component';
import { SelectFiltersComponent } from './components/select-filters/select-filters.component';

@NgModule({
  declarations: [AppComponent, MainPageComponent, NavigationComponent, DisplayPageComponent, SelectFiltersComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
