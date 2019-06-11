import { Component, OnInit } from '@angular/core';



export class Event {
  image: string;
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  details: string;
}

const EVENTS: Event [] = [
  {
  image: 'http://lorempixel.com/400/65/city',
  id: 1,
  name: 'Worship Conference',
  date: 'June 27-30',
  time: '8 am- 5 pm',
  location: 'Main Campus Sanctuary',
// tslint:disable-next-line: max-line-length
  details: '>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'

  // C/O https://placeholder.com/text/lorem-ipsum/'
},
{
  image: 'http://lorempixel.com/400/65/sports',
  id: 2,
  name: 'Baseball at the Park',
  date: 'Saturday, July 4',
  time: '12- 5 pm',
  location: 'Lakeview Park',
// tslint:disable-next-line: max-line-length
  details: '>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'

},
{
image: 'http://lorempixel.com/400/65/animals',
  id: 1,
  name: 'Zoolights',
  date: 'July 15',
  time: '5-10 pm',
  location: 'Zoo',
// tslint:disable-next-line: max-line-length
  details: '>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
}
];
@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  constructor() { }

  events = EVENTS;
  ngOnInit() {
  }

}
