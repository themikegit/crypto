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
import { HeaderComponent } from './comp/header/header.component';
import { HeroComponent } from './comp/hero/hero.component';
import { NavigationComponent } from './comp/navigation/navigation.component';
import { LoaderComponent } from './comp/loader/loader.component';
import { ThickComponent } from './comp/thick/thick.component';
import { SearchComponent } from './comp/search/search.component';
//pipes
import { FilterCoinsPipe } from './filter-coins.pipe';
import { FormatNumberPipe } from './format-number.pipe';
import { DecimalPipe } from '@angular/common';
//directives
import { SpecialHoverDirective } from './special-hover.directive';

import { MailChimpComponent } from './comp/mail-chimp/mail-chimp.component';
import { CoinTemplateComponent } from './views/coin-template/coin-template.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'coin/:id', component: CoinTemplateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCoinsComponent,
    SingleCoinComponent,
    HeaderComponent,
    HeroComponent,
    NavigationComponent,
    LoaderComponent,
    ThickComponent,
    SearchComponent,
    FilterCoinsPipe,
    SpecialHoverDirective,
    FormatNumberPipe,
    MailChimpComponent,
    CoinTemplateComponent,
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
