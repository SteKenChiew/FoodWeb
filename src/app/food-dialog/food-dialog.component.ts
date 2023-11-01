import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-food-dialog',
  templateUrl: './food-dialog.component.html',
  styleUrls: ['./food-dialog.component.css']
})
export class FoodDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  
}
