import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { SectionCoursesComponent } from './section-courses/section-courses.component';



@NgModule({
  declarations: [CoursesComponent, SectionCoursesComponent],
  imports: [
    CommonModule
  ],
  exports: [CoursesComponent, SectionCoursesComponent]
})
export class CoursesModule { }
