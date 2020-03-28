import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../overlay.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  constructor(public overlay: OverlayService) { }
  openDialog(): void {
    const dialogRef = this.overlay.dialog.open(GraphComponent, this.overlay.config);
    dialogRef.afterClosed().subscribe(result => {
      console.log('this dialog was closed');
    });
  }

  ngOnInit(): void {
  }

}
