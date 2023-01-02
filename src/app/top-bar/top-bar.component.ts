import { Component } from '@angular/core';
import { topbarlinks } from 'src/routes';
import { AppService } from '../_services/app.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  topbarlinks = topbarlinks

  constructor(private api: AppService){}

  print(){
    this.api.search();
  }
}
