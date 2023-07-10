import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchServiceService } from '../search-service';
import { SearchDto } from '../SearchDto';



@Component({
  selector: 'app-search-topic',
  templateUrl: './search-topic.component.html',
  styleUrls: ['./search-topic.component.css']
})
export class SearchTopicComponent {
  listOfSearch: Array<SearchDto> = [];

  title ='';
 constructor(private activatedRoute: ActivatedRoute, private searchService: SearchServiceService ){
  this.title = this.activatedRoute.snapshot.params['title'];
  this.searchService.searchTopic(this.title).subscribe(response =>{
    this.listOfSearch = response;
  })

 }


}
