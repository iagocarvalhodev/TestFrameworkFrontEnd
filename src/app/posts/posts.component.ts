import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Post } from '../shared/models'
import { PlaceholderService } from '../shared/services/placeholder.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  columns: string[] = ['userId', 'id', 'title', 'body']
  posts: Observable<Post[]>

  constructor(private placeholderService: PlaceholderService) {}

  ngOnInit(): void {
    this.posts = this.getPosts()
  }

  getPosts() {
    return this.placeholderService.getPosts()
  }
}
