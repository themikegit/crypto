import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
//components
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AllCoinsComponent } from './comp/all-coins/all-coins.component';
import { SingleCoinComponent } from './comp/single-coin/single-coin.component';
import { CoinDetailsComponent } from './views/coin-details/coin-details.component';
import { HeaderComponent } from './comp/header/header.component';
import { HeroComponent } from './comp/hero/hero.component';
import { NavigationComponent } from './comp/navigation/navigation.component';
import { LoaderComponent } from './comp/loader/loader.component';
import { FilterComponent } from './comp/filter/filter.component';
import { GoProComponent } from './views/go-pro/go-pro.component';
import { ThickComponent } from './comp/thick/thick.component';
import { SearchComponent } from './comp/search/search.component';
//pipes
import { FilterCoinsPipe } from './filter-coins.pipe';
//directives
import { SpecialHoverDirective } from './special-hover.directive';
import { FormatNumberPipe } from './format-number.pipe';
import { DecimalPipe } from '@angular/common';
import { MailChimpComponent } from './comp/mail-chimp/mail-chimp.component';

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
    ThickComponent,
    SearchComponent,
    FilterCoinsPipe,
    SpecialHoverDirective,
    FormatNumberPipe,
    MailChimpComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
