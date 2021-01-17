import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Slurry Rani';
  showDetails = false;
  showDetails2 = false;
  showDetails3 = false;


  menuOpened : boolean = false;

  toogleMenu() : void {
    this.menuOpened = !this.menuOpened
  }

  // detailsAction(index: number) {
  //   if (index == 1) {
  //     this.showDetails = !this.showDetails;
  //   } else if (index == 2) {
  //     this.showDetails2 = !this.showDetails2;
  //   } else if (index == 3) {
  //     this.showDetails3 = !this.showDetails3;
  //   }


  // }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    let headerFixed = document.getElementById('header-fixed');
    let headerFixed2 = document.getElementById('header-fixed-logo');
    
    let headerMainMenu = document.getElementById('header-main-menu');


    

    if (headerFixed && headerMainMenu && headerFixed2) {
      if (window.pageYOffset > 275) {
        // headerMain.style.visibility = "hidden";
        headerFixed.style.visibility = "visible"

        // headerFixed.style.display = "flex"
        headerFixed.style.opacity = "1"
        headerFixed.style.height = "125px"
        // headerFixed2.style.transition = "opacity 1s"

        headerMainMenu.style.display = "none"
      } else {

        headerFixed.style.opacity = "0"
        headerFixed.style.height = "0px"


        // headerMain.style.visibility = "visible";
        headerFixed.style.visibility = "hidden"

        // headerFixed.style.display = "none"
        // headerFixed2.style.opacity = "0"
        // headerFixed2.style.transition = "opacity 1s"
        

        headerMainMenu.style.display = "flex"
      }
    }

  }



}


