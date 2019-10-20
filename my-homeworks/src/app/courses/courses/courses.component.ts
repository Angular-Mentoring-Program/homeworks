import { Component, OnInit } from '@angular/core';
import {Courses} from './courses-model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public listCourses: Courses[] = [
    {
      id: 1,
      title: 'Lorem Ipsum',
      creationDate: new Date('February 4, 2016 10:13:00'),
      duration: 50,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
      ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
      'when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      id: 2,
      title: 'Lorem Ipsum-1',
      creationDate: new Date('February 25, 2016'),
      duration: 45,
      description: ' It has survived not only five centuries, but also the leap into electronic typesetting, ' +
      'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing' +
      ' Lorem Ipsum passages,' +
      'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
