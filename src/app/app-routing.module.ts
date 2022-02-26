import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { ServeyListComponent } from './servey-list/servey-list.component';
import { TakeServeyComponent } from './take-servey/take-servey.component';

const routes: Routes = [
  {
    path: '',
    component: ServeyListComponent
  },
  {
    path: 'result/:serveyId',
    component: ResultComponent
  },
  {
    path: "take-servey/:serveyId",
    component: TakeServeyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
