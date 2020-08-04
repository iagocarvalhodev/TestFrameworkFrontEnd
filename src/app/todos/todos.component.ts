import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Todo } from '../shared/models'
import { PlaceholderService } from '../shared/services/placeholder.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  columns: string[] = ['userId', 'id', 'title', 'completed']
  todos: Observable<Todo[]>

  constructor(private placeholderService: PlaceholderService) {}

  ngOnInit(): void {
    this.todos = this.gettodos()
  }

  gettodos() {
    return this.placeholderService.getTodos()
  }
}
