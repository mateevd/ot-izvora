import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes, Router, ActivatedRoute} from '@angular/router';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';

import {MainNavComponent} from './main-nav/main-nav.component';
import {HomeComponent} from './home/home.component';
import {EventComponent} from './event/event.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'event', component: EventComponent},
    {path: 'contact', component: ContactComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        EventComponent,
        MainNavComponent,
        HomeComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatGridListModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
