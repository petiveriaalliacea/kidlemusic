import { Component, OnInit } from '@angular/core';
import { Music } from 'src/app/models/music';
import { MusicstoreService } from 'src/app/services/musicstore.service';

@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.scss']
})
export class CatagoriesComponent implements OnInit {

  playlists: Music[] = [];
  columns = ['id','author', 'title']
  constructor(private bs: MusicstoreService) { }

  ngOnInit(): void {
    this.bs.getUploads()
    .subscribe(res => {
      this.playlists = res
    })
  }
}
