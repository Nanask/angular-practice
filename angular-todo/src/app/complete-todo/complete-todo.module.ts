import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompleteTodoPageRoutingModule } from './complete-todo-routing.module';

import { CompleteTodoPage } from './complete-todo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompleteTodoPageRoutingModule,
  ],
  declarations: [CompleteTodoPage],
  exports: [CompleteTodoPage],
})
export class CompleteTodoPageModule {}
