import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompleteTodoPage } from './complete-todo.page';

const routes: Routes = [
  // {
  //   path: '/index',
  //   component: CompleteTodoPage,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompleteTodoPageRoutingModule {}
