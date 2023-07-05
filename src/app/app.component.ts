import { Component ,OnInit} from '@angular/core';

export var ip="10.10.8.45";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
  constructor(){}
  ngOnInit(): void {
    
  }
  title = 'CharityManagement';

}
