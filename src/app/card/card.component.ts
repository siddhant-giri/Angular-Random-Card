import { Component, Input, OnInit } from '@angular/core';
import { faCalendarTimes, faDatabase, faEnvelope, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  user;
  constructor() { }

  faEnvelope = faEnvelope;
  faDatabase = faDatabase;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faCalendarTimes= faCalendarTimes;

  ngOnInit(): void {
  }

}
