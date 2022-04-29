import { Component, Input, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { LoadingController } from '@ionic/angular';
import { ITodoDTO } from './../layout/layout.page';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss'],
})
export class TodoCreateComponent implements OnInit {
  @Input() todoList: ITodoDTO[];
  index = 0;
  todo: string;

  constructor(private loadingContriller: LoadingController) {}

  ngOnInit() {}

  async enterHandler() {
    const loading = await this.loadingContriller.create();

    // loading.present();

    // setTimeout(() => {
    this.index += 1;
    this.todoList.push({
      id: this.index,
      todo: this.todo,
    });
    console.log(this.index);
    console.log(this.todo);
    this.todo = '';
    // });
  }
}
