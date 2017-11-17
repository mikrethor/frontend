import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'daycare-application',
    templateUrl: 'app/components/application/app.html',
})
export class DaycareComponent implements OnInit {
    id: number;


    constructor(private route: ActivatedRoute, private router: Router, ) { }

    ngOnInit() {
        this.id= parseInt(this.route.snapshot.params['id']);
        console.log(this.route.params);
        console.log(this.id)

    }
}