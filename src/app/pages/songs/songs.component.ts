import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MusicstoreService } from 'src/app/services/musicstore.service';
import { Music } from 'src/app/models/music'
@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {

  musics: Music[] = [];
  columns = ['id','author', 'title']
  constructor(private bs: MusicstoreService) { }

  ngOnInit(): void {
    this.bs.getCatalog()
    .subscribe(res => {
      this.musics = res
    })
  }

}
