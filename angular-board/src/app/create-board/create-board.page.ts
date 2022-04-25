import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ToastColorType, ToastService } from '../service/toast.service';
import { BoardService } from './../../api/board/board.service';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.page.html',
  styleUrls: ['./create-board.page.scss'],
})
export class CreateBoardPage implements OnInit {
  // const nickname = localStorage.getItem('nickname');
  // @Input() name = localStorage.getItem('nickname');

  // form 데이터 보내기
  // Validators 모든 value 가져오기
  // required == not null
  createForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    writer: new FormControl(null, [Validators.required]),
    createdAt: new FormControl(null, [Validators.required]),
    tag: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
  });

  constructor(
    private router: Router,
    private boardService: BoardService,
    private toastService: ToastService
  ) {}

  ngOnInit() {}

  exit() {
    this.router.navigateByUrl('');
  }

  //
  async submit() {
    // value를 변환
    // 입력하지 않은 값들을 넣어주기
    this.createForm.patchValue({
      createdAt: new Date(),
      writer: localStorage.getItem('nickname'),
    });

    // 유효성검사에서 오류가 났다
    if (!this.createForm.valid) {
      const toast = await this.toastService.showToast(
        '입력되지 않은 값이 있습니다.',
        ToastColorType.DANGER
      );
      // const toast = await this.toastController.create({
      //   message: '입력되지 않은 값이 있습니다.',
      //   position: 'bottom',
      //   duration: 3000,
      //   color: 'danger',
      // });
      toast.present();
      return;
    }

    // console.log('createAt', this.createForm.getRawValue());
    const body = this.createForm.getRawValue();

    // react에서 fetch처럼 데이터 넘기는 것...? 각각 조건을 만들어 확인하기
    this.boardService.create(body).subscribe({
      next: async (res) => {
        if (res === 'OK') {
          const toast = await this.toastService.showToast(
            '등록이 완료되었습니다.',
            ToastColorType.SUCCESS
          );
          toast.present();
          this.router.navigateByUrl('');
        } else {
          const toast = await this.toastService.showToast(
            '알 수 없는 오류 입니다.',
            ToastColorType.DANGER
          );
          toast.present();
        }
      },
      error: (error: HttpErrorResponse) => {},
      //무조건 실행
      complete: () => {},
    });
  }
}
