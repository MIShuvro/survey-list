import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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
  selector: 'app-servey-list',
  templateUrl: './servey-list.component.html',
  styleUrls: ['./servey-list.component.scss']
})
export class ServeyListComponent implements OnInit {

  displayedColumns: string[] = ['Created Date', 'Survey Title', 'Number of Questions', 'Time', 'Action'];
  dataSource = SURVETS_LIST;

  order = [
    {
      name: 'Latest',
      value: 'latest'
    },
    {
      name: 'Oldest',
      value: 'oldest'
    }
  ]
  question = [
    {
      name: 'Max Question',
      value: 'max_question'
    },
    {
      name: 'Min Question',
      value: 'min_question'
    }
  ]

  time = [
    {
      name: 'Max Time',
      value: 'max_time'
    },
    {
      name: 'Min Time',
      value: 'min_time'
    }
  ]

  constructor(private fb: FormBuilder) { }
  filter: FormGroup
  selectedDate = {
    start: null,
    end: null
  }
  ngOnInit(): void {

    this.filter = this.fb.group({
      title: [null],
      created: [null],
      createdSort: [null],
      numberQuestionsSort: [null],
      timeSort: [null]
    })
  }

  onStartDateChange(value: any) {
    this.selectedDate.start = value._d
   
  }
  onEndDateChange(value: any) {
    this.selectedDate.end = value._d
  }

  submit() {
    console.log(this.selectedDate);
    console.log(this.filter.value);
  }
  reset(){
    this.selectedDate.start = null
    this.selectedDate.end = null
    this.filter.reset()
  }
}
