import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Album } from '../shared/models'
import { PlaceholderService } from '../shared/services/placeholder.service'

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  columns: string[] = ['userId', 'id', 'title']
  albums: Observable<Album[]>

  constructor(private placeholderService: PlaceholderService) {}

  ngOnInit(): void {
    this.albums = this.getAlbums()
  }

  getAlbums() {
    return this.placeholderService.getAlbums()
  }
}
