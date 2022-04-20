import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

export interface ITodoDTO {
  id: number;
  todo: string;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {
  // todoList => ITodoDTO를 인터페이스로 갖는 배열
  // 초기화를 해줘야 값을 넣을 수 있음
  todoList: ITodoDTO[] = [];

  // todo: string;
  // 글이 등록될때 id값 지정
  // index는 선언할때부터 number를 주기 때문에 type을 지정해줄 필요가 없음
  // index = 0;

  // false 일때 create, true 업데이트
  isUpdate = false;

  updateTodo: string;

  constructor(private loadingController: LoadingController) {}

  // 라이프사이클
  // 타입스크립트는 확장팩 개념 ㅋㅋㅋ

  ngOnInit() {}
  // todo데이터가 입력됐는지 확인한 코드
  // changeHandler() {
  //   console.log(this.todo);
  // }

  // 업데이트
  update(i: number) {
    this.todoList[i].todo = this.updateTodo;
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
