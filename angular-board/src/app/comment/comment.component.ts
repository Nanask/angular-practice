import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICommentDTO } from 'src/interface/dto/comment.dto';
import { CommnetService } from 'src/api/comment/commnet.service';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { comment } from 'postcss';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Output() completedUpdate: EventEmitter<boolean> = new EventEmitter();

  commentForm = new FormGroup({
    writer: new FormControl(null, [Validators.required]),
    createdAt: new FormControl(null, [Validators.required]),
    updatedAt: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
    b_seq: new FormControl(null, [Validators.required]),
    seq: new FormControl(null, [Validators.required]),
  });

  constructor(
    private commnetService: CommnetService,
    private alertController: AlertController,
    private router: Router
  ) {}

  @Input() comment: ICommentDTO;

  isUpdate = false;
  updateComment: string;

  ngOnInit() {}

  setUpdate(content: string) {
    this.commnetService.findById(this.comment.seq).subscribe((res) => {
      this.comment = res;
    });

    this.isUpdate = true;
    this.updateComment = content;
  }

  async commentUpdate() {
    const alert = await this.alertController.create({
      header: '업데이트',
      message: '댓글을 수정하시겠습니까?',
      buttons: [
        {
          text: '확인',
          handler: () => {
            this.commentForm.patchValue({
              ...this.comment,
              updatedAt: new Date(),
              writer: localStorage.getItem('nickname'),
              content: this.updateComment,
            });

            const body = this.commentForm.getRawValue();
            this.commnetService
              .update(this.comment.seq, body)
              .subscribe((res) => {
                this.completedUpdate.emit(true);
                this.isUpdate = false;
              });
          },
        },
      ],
    });
    alert.present();
  }

  async commentDelete() {
    const alert = await this.alertController.create({
      header: '삭제',
      message: '삭제하시겠습니까?',
      buttons: [
        {
          text: '확인',
          handler: () => {
            this.commnetService.delete(this.comment?.seq).subscribe((res) => {
              console.log('res', res);
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
