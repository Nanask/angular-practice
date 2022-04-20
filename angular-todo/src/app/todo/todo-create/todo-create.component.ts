import { Component, Input, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ITodoDTO } from './../../layout/layout.page';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss'],
})
export class TodoCreateComponent implements OnInit {
  // 부모요소에서 자식요소로 props 전달하기
  @Input() todoList: ITodoDTO[];

  todo: string;

  index = 0;

  // loading 보여주기 위해 import한 것
  constructor(private loadingController: LoadingController) {}

  // enter쳤을때 값이 입력될 수 있도록 하기
  async enterHandler() {
    const loading = await this.loadingController.create();

    loading.present();

    setTimeout(() => {
      this.index += 1;
      this.todoList.push({
        id: this.index,
        todo: this.todo,
      });
      // input 값 초기화
      this.todo = '';
      // todoList를 받으면 array로 나오기때문에 파싱해서 텍스트로 변경해주기
      localStorage.setItem('todoList', JSON.stringify(this.todoList));

      loading.dismiss();
    }, 1000);
  }

  ngOnInit() {}
}
