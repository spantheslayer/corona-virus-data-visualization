import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../overlay.service';


@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  constructor(public overlay: OverlayService) {}
  openDialog(): void {
    const dialogRef = this.overlay.dialog.open(CasesComponent,this.overlay.config)
    dialogRef.afterClosed().subscribe(result => {
      console.log('this dialog was closed');
    });
  }
  ngOnInit(): void {
  }

}
