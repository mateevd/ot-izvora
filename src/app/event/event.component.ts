import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

    constructor() {
    }

    title = 'Events from FB';
    events = [
        {title: 'Event 1', description: 'qsdmlqsmldqsmldkmqs', cols: 2, rows: 1},
        {title: 'Event 2', description: 'qsdmlqsmldqsmldkmqs', cols: 2, rows: 1},
        {title: 'Event 3', description: 'qsdmlqsmldqsmldkmqs', cols: 2, rows: 1},
        {title: 'Event 4', description: 'qsdmlqsmldqsmldkmqs', cols: 2, rows: 1},
    ];

    ngOnInit() {
    }

}
