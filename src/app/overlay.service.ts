import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  config = {
    width: '100vw',
    height:  '100vh',
    maxWidth: '100vw',
    maxHeight: '100vh',
    hasBackdrop: false,
    panelClass : 'mat-dialog-container-custom',
  };
  constructor(public dialog: MatDialog) {}
}
