import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { PostsRoutingModule } from './posts-routing.module'
import { PostsComponent } from './posts.component'

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, PostsRoutingModule, SharedModule]
})
export class PostsModule {}
