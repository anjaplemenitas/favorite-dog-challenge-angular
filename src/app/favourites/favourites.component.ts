import { Component, OnInit } from '@angular/core'
import { FavouritesService } from '../favourites.service'
import { faHouse, faBone, faPaw } from '@fortawesome/free-solid-svg-icons'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { Image } from '../images'

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  image: Image | undefined
  faHouse = faHouse
  fasHeart = fasHeart
  faBone = faBone
  faPaw = faPaw
  favouriteImages = this.favouritesService.getFavouriteImages()
  loading = true

  constructor(private favouritesService: FavouritesService) {}

  // removing dog from localStorage
  removeFavouriteDog(favouriteDog: Image) {
    this.favouritesService.removeFavouriteDog(favouriteDog)
    this.reload()
  }

  reload() {
    this.favouriteImages = this.favouritesService.getFavouriteImages()
  }
  ngOnInit(): void {}
}
