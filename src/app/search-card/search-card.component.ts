import { Component, Input } from '@angular/core';
import { SearchDto } from '../SearchDto';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent {
  @Input() searchDto!: SearchDto;
  
  ngOnInit(): void {
      
  }
  
}
