import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { BoardComponent } from './../board/board.component';
import { HomePageRoutingModule } from './home-routing.module';
import { DatePipe } from 'src/pipe/date.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, BoardComponent, DatePipe],
})
export class HomePageModule {}
