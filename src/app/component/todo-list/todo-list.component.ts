import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../model/todo';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  visibleTodos: Todo[] = [];
  todosSubscription: Subscription;
  currentStatus = '';
  isAllCompleted: boolean;

  constructor(private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit() {
    this.todosSubscription = this.todoService.todos$
      .combineLatest(this.route.params.map(params => params.status))
      .subscribe(([todos, status]) => {
        this.currentStatus = status;
        this.isAllCompleted = todos.length === todos.filter(todo => todo.completed).length;
        switch (this.currentStatus) {
          case 'active':
            this.visibleTodos = todos.filter(todo => !todo.completed);
            break;
          case 'completed':
            this.visibleTodos = todos.filter(todo => todo.completed);
            break;
          default:
            this.visibleTodos = todos;
            break;
        }
      });
  }

}
