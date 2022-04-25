import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

// OnInit 컴포넌트가 생성될 때
export class HomePage implements OnInit {
  nickname: string = '';

  segmentValue = 'board';

  constructor(private router: Router) {}
  // 생명주기 확인
  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }
  // 컴포넌트가 생성될 때 사용하는 함수
  ngOnInit(): void {
    const nickname = localStorage.getItem('nickname');
    if (nickname) {
      this.nickname = nickname;
    }
  }

  // nickname localStorage 저장
  handleNickname(ev: any) {
    this.nickname = ev.value;

    localStorage.setItem('nickname', this.nickname);
  }

  // 새 글 작성 버튼 누를때 페이지 이동
  showCreate() {
    this.router.navigateByUrl('regist');
  }
}
