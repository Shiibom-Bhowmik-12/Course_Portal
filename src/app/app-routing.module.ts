import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ZoomComponent } from './zoom/zoom.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewProfileComponent } from './profile/view-profile/view-profile.component';
import { UpdateProfileComponent } from './profile/update-profile/update-profile.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'zoom',
    component: ZoomComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'viewprofile',
    component: ViewProfileComponent,
  },
  {
    path: 'updateprofile',
    component: UpdateProfileComponent,
  },
  {
    path:'404error',
    component:ErrorComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'courses',
    component:CoursesComponent
  },
  {
    path: '',
    redirectTo: '/404error',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
