import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { BoardComponent } from './../board/board.component';
import { HomePageRoutingModule } from './home-routing.module';
import { DatePipe } from 'src/pipe/date.pipe';
import { BoardDetailComponent } from './../board-detail/board-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
  ],

  declarations: [HomePage, BoardComponent, DatePipe, BoardDetailComponent],
})
export class HomePageModule {}
