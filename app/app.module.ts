import { NgModule, CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DaycareComponent } from './components/application/app.component';
import { LoginComponent } from './components/login/login.component';
import { ParentComponent } from './components/parent/parent.component';
import { EducatorComponent } from './components/educator/educator.component';
import { DaycareAdminComponent } from './components/daycareadmin/daycareadmin.component';
import { AdminEducatorComponent } from './components/daycareadmin/educator.component';
import { AdminParentComponent } from './components/daycareadmin/parent.component';
import { AdminChildComponent } from './components/daycareadmin/child.component';
import { AdminEditEducatorComponent } from './components/daycareadmin/edit-educator.component';
import { AdminEditChildComponent } from './components/daycareadmin/edit-child.component';
import { AdminEditParentComponent } from './components/daycareadmin/edit-parent.component';
import { EditSumupsComponent } from './components/sumups/edit-sumups.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DaycareService } from "./services/daycare-service";
import { ConstantsService } from "./services/constants-service";
import { LoginService } from "./services/login-service";
import { HttpModule, JsonpModule, Http, ConnectionBackend, } from '@angular/http';
import { routing } from './components/app.routing';
import { MdMenuModule } from '@angular2-material/menu';
import { MdRadioModule,MdUniqueSelectionDispatcher, } from '@angular2-material/radio';
import { MdIconModule } from '@angular2-material/icon';
import { MdListModule } from '@angular2-material/list';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { MdInputModule } from '@angular2-material/input';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { OVERLAY_PROVIDERS, MdCoreModule } from "@angular2-material/core";



@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule, routing, MdMenuModule, MdIconModule, HttpModule, MdCoreModule, MdToolbarModule, MdButtonModule, MdListModule, MdInputModule, MdRadioModule],
  providers: [DaycareService, ConstantsService, LoginService,MdUniqueSelectionDispatcher,
    { provide: LocationStrategy, useClass: HashLocationStrategy, },
    { provide: APP_BASE_HREF, useValue: '/', },
    OVERLAY_PROVIDERS, MdIconRegistry,
  ],
  declarations: [DaycareComponent, LoginComponent, ParentComponent, EducatorComponent, DaycareAdminComponent, AdminChildComponent, AdminEditEducatorComponent, AdminEducatorComponent, AdminParentComponent, NavbarComponent, AdminEditChildComponent, AdminEditParentComponent, EditSumupsComponent],
  bootstrap: [DaycareComponent,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }

