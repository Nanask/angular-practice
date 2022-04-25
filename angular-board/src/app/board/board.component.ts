import { Component, OnInit } from '@angular/core';
import { IBoardDTO } from 'src/interface/dto/board.dto';
import { BoardService } from './../../api/board/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  boardlist: IBoardDTO[];

  constructor(private boardService: BoardService) {}

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
}
