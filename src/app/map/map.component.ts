import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../overlay.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(public overlay: OverlayService) { }
  openDialog(): void {
    const dialogRef = this.overlay.dialog.open(MapComponent,this.overlay.config)
    dialogRef.afterClosed().subscribe(result => {
      console.log('this dialog was closed');
    });
  }

  ngOnInit(): void {
  }

}
