import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { Images } from './images'

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private readonly API = 'https://dog.ceo/api/breeds/image/random/5'
  constructor(private http: HttpClient) {}
  getImages() {
    return this.http.get<Images>(this.API).pipe(
      map((images) =>
        images.message.map((imageUrl) => ({
          url: imageUrl,
          used: false,
        })),
      ),
    )
  }
}
