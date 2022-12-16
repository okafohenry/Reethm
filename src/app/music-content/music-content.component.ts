import { Component, OnInit } from '@angular/core';
import { music_data, MusicDataProps } from 'src/music-data';

@Component({
  selector: 'app-music-content',
  templateUrl: './music-content.component.html',
  styleUrls: ['./music-content.component.css']
})
export class MusicContentComponent {
  music_data!: MusicDataProps[];
  isLessThanEqualToTen: string[] = [];
  isGreaterThanTen: string[] = [];
  colorVariations = ['gray', 'red', 'blue', 'green', 'purple']



  ngOnInit(){
    this.music_data = music_data
    console.log(this.music_data)

  }
}
