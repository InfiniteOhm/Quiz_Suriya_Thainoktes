import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { SearchpageComponent } from './components/searchpage/searchpage.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterpageComponent,
  },
  { path: 'search', 
  component: SearchpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
