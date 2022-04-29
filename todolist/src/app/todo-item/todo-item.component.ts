import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodoDTO } from '../layout/layout.page';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  constructor() {}

  @Input() todo: ITodoDTO;
  @Input() todoList: ITodoDTO[];
  @Input() id: ITodoDTO;

  @Output() todoDelete: EventEmitter<number> = new EventEmitter();

  faPan = faPen;
  isUpdate = false;
  updateTodo: string;
  check = false;

  ngOnInit() {}

  showUpdate(todo: string) {
    this.isUpdate = true;
    this.updateTodo = todo;
    console.log('todo', todo);
  }

  update() {
    this.todo.todo = this.updateTodo;
    this.isUpdate = false;
    console.log('update todo', this.todo);
  }

  todoCheck() {
    // this.check = true;
    console.log(this.check);
    const id = this.todo.id;
    console.log('id', id);

    if (!this.check) {
      this.check = true;
    } else {
      // this.todoList.map((check) => {
      //   console.log('check', check.id);
      //   console.log('id', id);

      this.check = false;
      // return check.id === id;
      // });
    }
  }

  // deleteHandler(id: number) {
  //   id = this.todo.id;
  //   console.log('id', id);

  //   const _todoList = this.todoList.filter((todo) => {
  //     // console.log('todo.id', todo.id);
  //     // console.log('id', id);
  //     return todo.id !== id;
  //   });
  //   console.log('todoList', _todoList);

  //   this.todoList = _todoList;
  // }

  deleteHandler(id: number) {
    this.todoDelete.emit(id);
  }
}
