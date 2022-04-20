import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutPageRoutingModule } from './layout-routing.module';

import { LayoutPage } from './layout.page';
import { TodoCreateComponent } from '../todo/todo-create/todo-create.component';
import { TodoItemComponent } from './../todo-item/todo-item.component';

// 여러개 component를 import하기위해 설정
// todoItem을 분리해서 컴포넌트 연결
const todoComponent = [TodoCreateComponent, TodoItemComponent];

@NgModule({
  imports: [
    // ngFor 나 ngIf 등을 사용하려면 얘가 있어야함
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutPageRoutingModule,
  ],
  // 모듈과 layout HTML을 연결해줌
  declarations: [LayoutPage, todoComponent],
})
export class LayoutPageModule {}
