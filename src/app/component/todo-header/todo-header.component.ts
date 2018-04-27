import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {
  newTodoText = "";

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo(title: string): void {
    this.todoService.addTodo(title);
    this.newTodoText = '';
  }

}
