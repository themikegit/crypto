import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AllCoinsComponent } from './comp/all-coins/all-coins.component';
import { SingleCoinComponent } from './comp/all-coins/single-coin/single-coin.component';
import { RouterModule, Routes } from '@angular/router';
import { CoinDetailsComponent } from './views/coin-details/coin-details.component';
import { HeaderComponent } from './comp/header/header.component';
import { HeroComponent } from './comp/hero/hero.component';
import { NavigationComponent } from './comp/navigation/navigation.component';
import { LoaderComponent } from './comp/loader/loader.component';
import { FilterComponent } from './comp/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { GoProComponent } from './views/go-pro/go-pro.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'go-pro', component: GoProComponent },
  { path: 'coin/:id', component: CoinDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCoinsComponent,
    SingleCoinComponent,
    CoinDetailsComponent,
    HeaderComponent,
    HeroComponent,
    NavigationComponent,
    LoaderComponent,
    FilterComponent,
    GoProComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
