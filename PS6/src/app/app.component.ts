import { Component } from '@angular/core';
import { ACTIVITY} from './ACTIVITY';
import { ACTIVITIES} from './ACTIVITY-MOCK';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
  activities = ACTIVITIES;
  currentAct: ACTIVITY;

  selectAct(activity:ACTIVITY){
    this.currentAct = activity;
  }

}
