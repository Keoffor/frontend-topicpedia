import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchTopicComponent } from './search-topic/search-topic.component';
import { TopicPageComponent } from './topic-page/topic-page.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },

 {
    path: 'search-topic/:title', component: SearchTopicComponent
  },
  {
    path: 'page-title/:title', component: TopicPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
