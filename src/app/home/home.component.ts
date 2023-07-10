import { Component  } from '@angular/core';
import { SearchDto } from '../SearchDto';
import { SearchServiceService } from '../search-service';
import {FormControl, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {
  
  searchInput: string = ""

  constructor(private router: Router){
    
  

}

  submitTopic(){
    if(this.searchInput !==""){
      console.log()
      this.router.navigateByUrl("/search-topic/"+this.searchInput)
  }
}

}
  

// function ngOnInit() {
//   throw new Error('Function not implemented.');
// }

