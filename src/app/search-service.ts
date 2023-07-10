import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SearchDto } from './SearchDto';
import { Observable } from 'rxjs';
import { PageDto } from './PageDto';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = environment.BACKEND_LOCAL;

  searchTopic(topic: string): Observable<Array<SearchDto>>{
    return this.httpClient.get<Array<SearchDto>>(this.baseUrl+"/api/search?topic="+topic)
  }
  getTitle(title: string): Observable<PageDto>{
    return this.httpClient.get<PageDto>(this.baseUrl+"/api/page?title="+title)
  }

}
