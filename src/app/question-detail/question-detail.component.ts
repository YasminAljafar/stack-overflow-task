import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  question!: string ;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const questionId = this.route.snapshot.paramMap.get('id');
    const apiUrl =' https://api.stackexchange.com/2.3/questions/${questionId}';
    const params = {
      site: 'stackoverflow',
      order: 'desc',
      sort: 'activity'
    };
    const headers=new HttpHeaders().set('contect-type' , 'text/plain');
      this.http.get(apiUrl, { params,headers, responseType:'text' }).subscribe((response: string) => {
        this.question = response;
      });
  }
}
