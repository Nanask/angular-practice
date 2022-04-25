import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateBoardPageRoutingModule } from './create-board-routing.module';
import { CreateBoardPage } from './create-board.page';

//ReactiveFormsModule 데이터 form으로 보내기 위한 모듈?
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBoardPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CreateBoardPage],
})
export class CreateBoardPageModule {}
