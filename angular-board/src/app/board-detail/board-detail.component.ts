import { Component, OnInit, Input } from '@angular/core';
import { IBoardDTO } from 'src/interface/dto/board.dto';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommnetService } from 'src/api/comment/commnet.service';
import { ICommentDTO } from './../../interface/dto/comment.dto';
import { BoardService } from './../../api/board/board.service';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { comment } from 'postcss';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.scss'],
})
export class BoardDetailComponent implements OnInit {
  b_seq: number;
  isUpdate = false;

  commentForm = new FormGroup({
    writer: new FormControl(null, [Validators.required]),
    createdAt: new FormControl(null, [Validators.required]),
    updatedAt: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
  });

  @Input() board: IBoardDTO;

  constructor(
    private commentService: CommnetService,
    private boardService: BoardService,
    private router: Router,
    private alertController: AlertController,
    private modalController: ModalController
  ) {}

  comments: ICommentDTO[];
  comment: ICommentDTO;

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.comments = [];

    this.commentService.findByBoardId(this.board.seq).subscribe((res) => {
      if (res) {
        this.comments = res;
        console.log('comments', this.comments);
      }
    });
  }

  submit() {
    // 2if (!this.isUpdate) {
    this.commentForm.patchValue({
      createdAt: new Date(),
      writer: localStorage.getItem('nickname'),
      b_seq: this.comment?.seq,
    });
    const body = this.commentForm.getRawValue();

    this.commentService.create(body).subscribe((res) => {
      console.log(body);
      this.getComments();
    });
  }

  async update() {
    const alert = await this.alertController.create({
      header: '업데이트',
      message: '게시글을 수정하시겠습니까?',
      buttons: [
        {
          text: '확인',
          handler: () => {
            this.router.navigateByUrl(`regist/${this.board?.seq}`);
            this.modalController.dismiss();
          },
        },
        {
          text: '취소',
        },
      ],
    });

    alert.present();
  }

  async commentUpdate(ev: any) {
    console.log('ev', ev);
    const alert = await this.alertController.create({
      header: '업데이트',
      message: '댓글을 수정하시겠습니까?',
      buttons: [
        {
          text: '확인',
          handler: () => {
            this.isUpdate = true;
            this.commentForm.patchValue({
              updateAt: new Date(),
              writer: localStorage.getItem('nickname'),
              b_seq: this.comment?.seq,
              content: this.comment?.content,
            });

            const body = this.commentForm.getRawValue();
            console.log('body', body);
            this.commentService.update(this.b_seq, body).subscribe((res) => {
              console.log('res');
            });
            // this.commentService.findById(ev).subscribe((res) => {
            //   console.log(res);
            // });
          },
        },
      ],
    });
    alert.present();
  }

  async boardDelete() {
    const alert = await this.alertController.create({
      header: '삭제',
      message: '게시글을 삭제하시겠습니까?',
      buttons: [
        {
          text: '확인',
          handler: () => {
            this.boardService.delete(this.board.seq).subscribe((res) => {
              console.log('삭제');
              this.router.navigateByUrl('');
              this.modalController.dismiss();
            });
          },
        },
        {
          text: '취소',
        },
      ],
    });
    alert.present();
  }
}
