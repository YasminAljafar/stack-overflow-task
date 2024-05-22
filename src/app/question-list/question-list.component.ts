import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions!: any[];

  constructor(private http: HttpClient) { }

 ngOnInit(){
  const apiUrl = 'https://api.stackexchange.com/2.3/questions';
  const params = {
    site: 'stackoverflow',
    pagesize: '50',
    order: 'desc',
    sort: 'creation'
 };
 this.http.get(apiUrl, { params }).subscribe((response: any) => {
  this.questions = response.items;
});

 }
}