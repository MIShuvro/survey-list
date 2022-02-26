import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";

type question = {
  title: string,
  type: string,
  options: object,
}
export interface PeriodicElement {
  id: number;
  title: string;
  data: string;
  time: string;
  questions: question[];
}

const SURVETS_LIST: PeriodicElement[] = [
  {
    id: 1,
    title: "Title of survey",
    data: "12/1/2022",
    time: "30min",
    questions: [
      {
        title: "Actual question",
        type: "radio",
        options: ['Male', 'Female']
      },
      {
        title: "Actual question2",
        type: "text",
        options: []
      },
    ]
  },
  {
    id: 2,
    title: "Title of survey 2",
    data: "12/1/2022",
    time: "30min",
    questions: [
      {
        title: "Actual question",
        type: "radio",
        options: ['Male', 'Female']
      },
      {
        title: "Actual question2",
        type: "text",
        options: []
      },
    ]
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns: string[] = [ 'Created Date', 'Survey Title', 'Number of Questions', 'Time', 'Action'];
  dataSource = SURVETS_LIST;

  constructor(private FormBuilder:FormBuilder){}
  filterForm = this.FormBuilder.group({
    title: [''],
    created: '',
    createdSort: 'asc',
    numberQuestionsSort: "asc",
    timeSort: 'asc'
  })
}
