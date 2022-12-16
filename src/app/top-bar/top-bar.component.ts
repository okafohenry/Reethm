import { Component } from '@angular/core';
import { topbarlinks } from 'src/routes';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  topbarlinks = topbarlinks
}
