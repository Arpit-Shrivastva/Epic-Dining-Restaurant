import { Component, OnInit } from '@angular/core';
import { Query } from 'src/app/Models/query';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  query: Query[] = []

  constructor(private queryService: QueryService) { }

  ngOnInit(): void {
    this.queryService.getQuery().subscribe((data) => {
      this.query = data;
    },
      (error) => {
        console.error('Error fetching menus:', error);
      }
    )
  };

}
