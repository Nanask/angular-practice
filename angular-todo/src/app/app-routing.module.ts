import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // home을 지웠기 때문에 home 라우터 삭제
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  //   {
  //     path: '',
  //     redirectTo: '',
  //     pathMatch: 'full',
  //   },
  //   {
  //     path: 'layout',
  //     loadChildren: () => import('./layout/layout.module').then( m => m.LayoutPageModule)
  //   },
  {
    // ''기본 루트로 이동했을 시 layoutmodule연결
    path: '', // url
    loadChildren: () =>
      import('../app/layout/layout.module').then((m) => m.LayoutPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
