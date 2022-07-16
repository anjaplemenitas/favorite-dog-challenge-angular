import { getModuleFactory, Injectable } from '@angular/core'
import { Image } from './images'

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  constructor() {}

  addToFavourites(image: Image) {
    const storedDogs: Image[] = JSON.parse(localStorage.getItem('dogs') || '[]')
    const isInFavorites =
      storedDogs.find((dog) => {
        return dog.url === image.url
      }) != undefined

    if (!isInFavorites) {
      storedDogs.push(image)
      localStorage.setItem('dogs', JSON.stringify(storedDogs))
      // console.log('added')
      return true
    } else {
      return false
    }
  }

  // removing dog from localStorage
  removeFavouriteDog(favouriteDog: Image) {
    const storedDogs = JSON.parse(localStorage.getItem('dogs') || '[]')
    const foundDog = storedDogs.find((dog: any) => {
      return dog.url === favouriteDog.url
    })

    if (foundDog !== undefined) {
      const index = storedDogs.indexOf(foundDog, 0)
      storedDogs.splice(index, 1)
      localStorage.setItem('dogs', JSON.stringify(storedDogs))

      window.alert('Image has been removed from Favourites.')
    }
  }

  getFavouriteImages() {
    return JSON.parse(localStorage.getItem('dogs') || '[]')
  }

  clearFavourites() {
    localStorage.setItem('dogs', JSON.stringify('[]'))
  }
}
