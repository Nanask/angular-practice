import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  // 자식 => 부모
  @Output() todoDelete: EventEmitter<number> = new EventEmitter();

  ngOnInit() {}

  updateTodo: string;

  isUpdate = false;

  update() {
    this.todo.todo = this.updateTodo;
    this.isUpdate = false;

    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  // isUpdate가 true 일때
  showUpdate(todo: string) {
    this.isUpdate = true;
    this.updateTodo = todo;
  }

  //deleteHandler가 실행될때 todoDelte에 id를 보내기
  deleteHandler(id: number) {
    this.todoDelete.emit(id);
    // if (!confirm('정말 삭제하시겠습니까?')) {
    //   return;
    // }
    // const _todoList = this.todoList.filter((todo) => {
    //   return todo.id !== id;
    // });
    // this.todoList = _todoList;

    // if (this.todoList.length !== 0) {
    //   localStorage.setItem('todoList', JSON.stringify(this.todoList));
    // } else {
    //   localStorage.removeItem('todoList');
    // }
  }
}
