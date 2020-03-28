import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../overlay.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  constructor(public overlay: OverlayService) { }

  openDialog(): void {
    const dialogRef = this.overlay.dialog.open(CountryComponent, this.overlay.config);
    dialogRef.afterClosed().subscribe(result => {
      console.log('this dialog was closed');
    });
  }
  ngOnInit(): void {
  }

}
