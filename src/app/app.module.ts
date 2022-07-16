import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { ImagesService } from './images.service'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ImagesComponent } from './images/images.component'
import { FavouritesComponent } from './favourites/favourites.component'

@NgModule({
  declarations: [AppComponent, ImagesComponent, FavouritesComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: ImagesComponent },
      { path: 'favourites', component: FavouritesComponent },
    ]),
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
