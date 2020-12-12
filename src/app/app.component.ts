import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'beer-management';
  showDetails = false;
  showDetails2 = false;
  showDetails3 = false;

  detailsAction(index: number) {
    if(index == 1) {
      this.showDetails = !this.showDetails;
    } else if(index == 2) {
      this.showDetails2 = !this.showDetails2;
    } else if(index == 3) {
      this.showDetails3 = !this.showDetails3;
    }

    
  }
}


