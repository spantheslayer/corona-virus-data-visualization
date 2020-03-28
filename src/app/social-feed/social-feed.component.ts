import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../overlay.service';

@Component({
  selector: 'app-social-feed',
  templateUrl: './social-feed.component.html',
  styleUrls: ['./social-feed.component.scss']
})
export class SocialFeedComponent implements OnInit {

  constructor(public overlay: OverlayService) { }
  openDialog(): void {
    const dialogRef = this.overlay.dialog.open(SocialFeedComponent, this.overlay.config);
    dialogRef.afterClosed().subscribe(result => {
      console.log('this dialog was closed');
    });
  }
  ngOnInit(): void {
  }

}
