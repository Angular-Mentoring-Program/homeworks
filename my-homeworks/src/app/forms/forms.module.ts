import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';



@NgModule({
  declarations: [LoginFormComponent, NewCourseFormComponent],
  imports: [
    CommonModule
  ],
  exports: [LoginFormComponent, NewCourseFormComponent]
})
export class FormsModule { }
