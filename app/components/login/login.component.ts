import { Component, Output, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login-service';
import { Observable, Subscription } from 'rxjs/Rx';
import { User } from '../../services/daycare-service';


@Component({
    selector: 'login',
    templateUrl: 'app/components/login/login.html',
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    connected = false;
    user: User = new User(0, 0, 0, 0, "", 0);

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: LoginService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
            data => {
                console.log(data);

                if (data.id != null) {
                    this.user = new User(
                        data.id,
                        data.parent,
                        data.educator,
                        data.admin,
                        data.login,
                        data.daycareId
                    );


                } else {
                    for (let error of data) {
                        console.log(error.code + " : " + error.status + " : " + error.errors);
                    }

                }

                if (this.user.admin != null) {
                    this.router.navigate(['daycare', this.user.idDaycare, 'admin', this.user.admin]);
                }

                if (this.user.parent != null) {
                    this.router.navigate(['daycare', this.user.idDaycare, 'parent', this.user.parent.id]);
                }

                if (this.user.educator != null) {
                    this.router.navigate(['daycare', this.user.idDaycare, 'educator', this.user.educator.id]);
                }

                this.connected = data;
                this.loading = this.connected;

                this.returnUrl = "parent";
            },
            error => {
                console.log("Error happened :" + error);
                this.loading = false;
            });

    }
}