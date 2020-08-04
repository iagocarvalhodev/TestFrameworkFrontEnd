import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { TodosRoutingModule } from './todos-routing.module'
import { TodosComponent } from './todos.component'

@NgModule({
  declarations: [TodosComponent],
  imports: [CommonModule, TodosRoutingModule, SharedModule]
})
export class TodosModule { }
