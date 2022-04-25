import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { BoardService } from './../../api/board/board.service';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.page.html',
  styleUrls: ['./create-board.page.scss'],
})
export class CreateBoardPage implements OnInit {
  // form 데이터 보내기
  // Validators 모든 value 가져오기
  // required == not null
  createForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    writer: new FormControl(null, [Validators.required]),
    createAt: new FormControl(null, [Validators.required]),
    tag: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
  });

  constructor(
    private router: Router,
    private boardService: BoardService,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  exit() {
    this.router.navigateByUrl('');
  }

  //
  async submit() {
    // 유효성검사에서 오류가 났다
    if (!this.createForm.valid) {
      const toast = await this.toastController.create({
        message: '입력되지 않은 값이 있습니다.',
        position: 'bottom',
        duration: 3000,
        color: 'danger',
      });
      toast.present();
    }
    const body = this.createForm.getRawValue();
  }
}
