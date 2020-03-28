import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(): void{
    const dialogRef = this.dialog.open(NewsFeedComponent, {
        width: '100vw',
        height: '100vh',
        maxHeight: '100vh',
        maxWidth: '100vw',
        hasBackdrop: false,
        panelClass: 'mat-dialog-container-custom'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('New Feed Was closed');
    });
}
  ngOnInit(): void {
  }

}
