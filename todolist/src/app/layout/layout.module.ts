import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutPageRoutingModule } from './layout-routing.module';

import { LayoutPage } from './layout.page';
import { TodoCreateComponent } from '../todo-create/todo-create.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutPageRoutingModule,
    FontAwesomeModule,
  ],
  declarations: [LayoutPage, TodoCreateComponent, TodoItemComponent],
})
export class LayoutPageModule {}
