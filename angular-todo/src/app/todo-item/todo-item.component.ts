import { Component, Input, OnInit } from '@angular/core';
import { ITodoDTO } from '../layout/layout.page';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  constructor() {}

  // Input() : 부모 => 자식 props
  @Input() todo: ITodoDTO;

  @Input() todoList: ITodoDTO[];

  ngOnInit() {}

  updateTodo: string;

  isUpdate = false;

  update() {
    this.todo.todo = this.updateTodo;
    this.isUpdate = false;
  }

  // isUpdate가 true 일때
  showUpdate(todo: string) {
    this.isUpdate = true;
    this.updateTodo = todo;
  }

  deleteHandler(id: number) {
    if (!confirm('정말 삭제하시겠습니까?')) {
      return;
    }
    const _todoList = this.todoList.filter((todo) => {
      return todo.id !== id;
    });
    this.todoList = _todoList;
  }
}
