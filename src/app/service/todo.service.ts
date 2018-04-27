import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Todo } from '../model/todo';

@Injectable()
export class TodoService {

  createTodo$: Subject<Todo> = new Subject<Todo>();
  create$: Subject<Todo> = new Subject<Todo>();

  constructor() {
    this.createTodo$.subscribe(this.create$);
  }

  addTodo(title: string): void {
    this.createTodo$.next(new Todo(title));
  }

}
