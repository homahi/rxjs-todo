import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Todo } from '../model/todo';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/combineLatest';

const initialTodos: Todo[] = JSON.parse(localStorage.getItem('angular-todo')) || [];

type TodosOperation = (todos: Todo[]) => Todo[];

@Injectable()
export class TodoService {

  todos$: Observable<Todo[]>;
  createTodo$: Subject<Todo> = new Subject<Todo>();
  create$: Subject<Todo> = new Subject<Todo>();
  update$: BehaviorSubject<TodosOperation> = new BehaviorSubject<TodosOperation>((todos: Todo[]) => todos);

  constructor() {
    this.createTodo$.subscribe(this.create$);
    this.todos$ = this.update$
    .scan((todos: Todo[], operation: TodosOperation) => operation(todos), initialTodos)
    .publishReplay(1)
    .refCount();

    this.todos$.forEach(todos => localStorage.setItem('angular-todo', JSON.stringify(todos)));
  }

  addTodo(title: string): void {
    this.createTodo$.next(new Todo(title));
  }

}
