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
  constructor() {}
  todo: string;
  todoList: ITodoDTO[] = [];

  index = 0;

  ngOnInit() {}
}
