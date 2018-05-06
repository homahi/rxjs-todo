import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  editing = false;

  @Input() todo: Todo;

  @Output() handleToggle = new EventEmitter();

  @Output() handleRemove = new EventEmitter();

  @Output() handleModify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggle(): void {
    this.handleToggle.next(this.todo.id);
  }

  update(): void {
    this.handleModify.next(this.todo);
  }

  cancelEditing(): void {
    this.editing = false;
  }

  edit(): void {
    this.editing = true;
  }

  remove(): void {
    this.handleRemove.next(this.todo.id);
  }

  stopEditing(newTitle: string): void {
    this.todo.title = newTitle;
    this.editing = false;
    if (this.todo.title.length) {
      this.update();
    } else {
      this.remove();
    }
  }

}
