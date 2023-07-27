import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeadermainComponent } from './headermain/headermain.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ZoomComponent } from './zoom/zoom.component';
import { UpdateProfileComponent } from './profile/update-profile/update-profile.component';
import { ViewProfileComponent } from './profile/view-profile/view-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HirecompComponent } from './hirecomp/hirecomp.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ErrorComponent } from './error/error.component';
import { CoursesComponent } from './courses/courses.component';
import { EducatorsComponent } from './educators/educators.component';
import { StudfeedComponent } from './studfeed/studfeed.component';
import { FooterComponent } from './footer/footer.component';
import { AllcoursesComponent } from './allcourses/allcourses.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomecoursesComponent } from './homecourses/homecourses.component';
import { StoriesComponent } from './stories/stories.component';
import { CartComponent } from './cart/cart.component';
import { ChatComponent } from './chat/chat.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { TasksComponent } from './tasks/tasks.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { OrdersComponent } from './orders/orders.component';
import { LiveclassesComponent } from './liveclasses/liveclasses.component';
import { CoursesdetailsComponent } from './coursesdetails/coursesdetails.component';
import { FormsModule } from '@angular/forms';
import { EnrolledcoursesComponent } from './enrolledcourses/enrolledcourses.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    HeadermainComponent,
    HeaderComponent,
    SidenavComponent,
    ZoomComponent,
    UpdateProfileComponent,
    ViewProfileComponent,
    HirecompComponent,
    AboutusComponent,
    ErrorComponent,
    CoursesComponent,
    EducatorsComponent,
    StudfeedComponent,
    FooterComponent,
    AllcoursesComponent,
    LoginComponent,
    SignupComponent,
    HomecoursesComponent,
    StoriesComponent,
    CartComponent,
    ChatComponent,
    AnalyticsComponent,
    MailboxComponent,
    TasksComponent,
    AssignmentsComponent,
    MycoursesComponent,
    OrdersComponent,
    LiveclassesComponent,
    CoursesdetailsComponent,
    EnrolledcoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
