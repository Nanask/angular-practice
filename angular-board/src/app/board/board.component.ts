import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IBoardDTO } from 'src/interface/dto/board.dto';
import { BoardService } from './../../api/board/board.service';
import { BoardDetailComponent } from './../board-detail/board-detail.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  boardlist: IBoardDTO[];

  constructor(
    private boardService: BoardService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.boardlist = [];

    this.boardService.findAll().subscribe((res) => {
      if (res) {
        const _boardlist = res;

        this.boardlist = _boardlist.filter((board) => {
          return board?.writer === localStorage.getItem('nickname');
        });
      }
    });
  }

  async showDetail(board: IBoardDTO) {
    const modal = await this.modalController.create({
      component: BoardDetailComponent,
      componentProps: { board },
      cssClass: 'detail-modal',
    });

    modal.present();
  }
}
