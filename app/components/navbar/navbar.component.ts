import { Component } from '@angular/core';

@Component({
  selector: 'daycare-navbar',
  templateUrl: 'app/components/navbar/navbar.html',
})
export class NavbarComponent {

  //Admin
  menuData = {
    "menu": [
      { "id": 0, "name": "Children", "image": "/Images/dashboard_on.gif", "link": "/daycare/:idDaycare/admin/:idAdmin/children", },
      { "id": 1, "name": "Educators", "image": "/Images/dashboard_on.gif", "link": "/daycare/:idDaycare/admin/:idAdmin/educators", },
      { "id": 2, "name": "Parents", "image": "/Images/dashboard_on.gif", "link": "/daycare/:idDaycare/admin/:idAdmin/parents", },
    ]
  };



  constructor() {

  }

}