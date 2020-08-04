import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Album, Post, Todo } from '../models'

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${environment.base_URL}/albums`)
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.base_URL}/posts`)
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.base_URL}/todos`)
  }
}
