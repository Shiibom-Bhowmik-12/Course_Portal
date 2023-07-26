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
import { StoriesComponent } from './stories/stories.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ChatComponent } from './chat/chat.component';
import { CartComponent } from './cart/cart.component';
import { TasksComponent } from './tasks/tasks.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { OrdersComponent } from './orders/orders.component';
import { LiveclassesComponent } from './liveclasses/liveclasses.component';


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
    path:'successstories',
    component:StoriesComponent
  },
  {
    path:'mailbox',
    component:MailboxComponent
  },
  {
    path:'analytics',
    component:AnalyticsComponent
  },
  {
    path:'chat',
    component:ChatComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'tasks',
    component:TasksComponent
  },
  {
    path:'assignments',
    component:AssignmentsComponent
  },
  {
    path:'mycourses',
    component:MycoursesComponent
  },
  {
    path:'orders',
    component:OrdersComponent
  },
  {
    path:'liveclasses',
    component:LiveclassesComponent
  },
  {
    path: '',
    redirectTo: '/home',
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
