import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {LogoComponent} from './logo/logo/logo.component';
import {HeaderComponent} from './header/header/header.component';
import {LoginFormComponent} from './forms/login-form/login-form.component';
import {NewCourseFormComponent} from './forms/new-course-form/new-course-form.component';
import {CoursesComponent} from './courses/courses/courses.component';
import {FooterComponent} from './footer/footer/footer.component';
import {PopUpComponent} from './pop-up/pop-up/pop-up.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs/breadcrumbs.component';
import {SectionCoursesComponent} from './courses/section-courses/section-courses.component';
import {UserComponent} from './user/user/user.component';

@NgModule({
  declarations: [AppComponent, LogoComponent, HeaderComponent, LoginFormComponent, NewCourseFormComponent,
    CoursesComponent, FooterComponent, PopUpComponent, BreadcrumbsComponent, SectionCoursesComponent,
    UserComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
