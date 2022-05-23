import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetTheme } from './../store/theme.action';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

// OnInit 컴포넌트가 생성될 때
export class HomePage implements OnInit {
  @Select((state) => state.theme) theme$: Observable<string>;

  nickname: string = '';

  segmentValue = 'board';

  constructor(private router: Router, private store: Store) {}
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

    this.store.dispatch(new SetTheme());
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
