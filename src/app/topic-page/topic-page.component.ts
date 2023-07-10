import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchServiceService } from '../search-service';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.css']
})
export class TopicPageComponent {

  topic!: string;
  extracts!: string;
  source!: string;
  title!: string;

  constructor (private activatedRoute: ActivatedRoute,private searchservice: SearchServiceService){
    this.topic = this.activatedRoute.snapshot.params['title'];
    this.searchservice.getTitle(this.topic).subscribe(data =>{
      this.extracts = data.extracts;
      this.title = data.title;
      this.source = data.source
    })
  }
}
