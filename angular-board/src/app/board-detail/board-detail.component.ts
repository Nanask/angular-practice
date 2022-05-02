import { Component, OnInit, Input } from '@angular/core';
import { IBoardDTO } from 'src/interface/dto/board.dto';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommnetService } from 'src/api/comment/commnet.service';
import { ICommentDTO } from './../../interface/dto/comment.dto';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.scss'],
})
export class BoardDetailComponent implements OnInit {
  commentForm = new FormGroup({
    writer: new FormControl(null, [Validators.required]),
    createdAt: new FormControl(null, [Validators.required]),
    updatedAt: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
    b_seq: new FormControl(null, [Validators.required]),
  });

  @Input() board: IBoardDTO;

  constructor(private commentService: CommnetService) {}

  comments: ICommentDTO[];

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.comments = [];

    this.commentService.findByBoardId(this.board.seq).subscribe((res) => {
      if (res) {
        this.comments = res;
      }
    });
  }

  submit() {
    this.commentForm.patchValue({
      createdAt: new Date(),
      writer: localStorage.getItem('nickname'),
      b_seq: this.board?.seq,
    });
    const body = this.commentForm.getRawValue();

    this.commentService.create(body).subscribe((res) => {
      this.getComments();
    });
  }
}
