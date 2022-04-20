import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { SegmnetEnum } from 'src/lib/segment.enum';

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
  // selected = 'complete';
  selected = SegmnetEnum.COMP;

  todoList: ITodoDTO[] = [];

  isUpdate = false;

  updateTodo: string;

  currentIndex = -1;

  constructor(private loadingController: LoadingController) {}

  ngOnInit() {
    const _todoList = localStorage.getItem('todoList');
    if (_todoList) {
      this.todoList = JSON.parse(_todoList);
    }
  }

  delete(ev: any) {
    console.log('ev', ev);
    if (!confirm('정말 삭제하시겠습니까?')) {
      return;
    }
    const _todoList = this.todoList.filter((todo) => {
      return todo.id !== ev;
    });
    this.todoList = _todoList;

    if (this.todoList.length !== 0) {
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
    } else {
      localStorage.removeItem('todoList');
    }
  }
}
