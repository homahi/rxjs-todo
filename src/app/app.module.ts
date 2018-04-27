import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routedComponents } from './app-routing.module';


import { AppComponent } from './app.component';
import { TodoFooterComponent } from './component/todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './component/todo-header/todo-header.component';
import { TodoItemComponent } from './component/todo-item/todo-item.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { TodosComponent } from './component/todos/todos.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFooterComponent,
    TodoHeaderComponent,
    TodoItemComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
