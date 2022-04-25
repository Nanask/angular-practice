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
  faPan = faPen;
  isUpdate = false;
  updateTodo: string;

  constructor(private loadingContriller: LoadingController) {}

  ngOnInit() {}

  async enterHandler() {
    // const loadding = await this.loadingContriller.create();

    // loadding.present();

    // setTimeout(() => {
    this.index += 1;
    this.todoList.push({
      id: this.index,
      todo: this.todo,
    });
    console.log(this.index);
    console.log(this.todo);
    // });
  }

  showUpdate(todo: string) {
    this.isUpdate = true;
    this.updateTodo = todo;
    console.log('todo', todo);
  }

  Delete() {}
}
