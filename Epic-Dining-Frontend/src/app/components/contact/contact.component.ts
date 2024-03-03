import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QueryService } from 'src/app/services/query.service';
import { EnqueriesComponent } from '../enqueries/enqueries.component';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private matDialog: MatDialog,
    private queryService: QueryService,
    private snackBar: MatSnackBar) { }
    

  queryBtn() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '40%';
    dialogConfig.height = '70%'; 
    dialogConfig.panelClass = 'custom-dialog-style'; // Add a custom CSS class for additional styles

    const dialogRef = this.matDialog.open(EnqueriesComponent, dialogConfig);

    dialogRef.componentInstance.queryFormSubmit.subscribe((data) => {
      this.queryService.postQuery(data).subscribe(
        () => {
          this.snackBar.open('Your Query Submitted, Thank You...', 'Close', {
            duration: 3000,
          });
          dialogRef.close();
        },
        (error) => {
          console.error(error);
          this.snackBar.open('Failed to submit the query. Please try again.', 'Close', {
            duration: 3000,
          });
          dialogRef.close();
        }
      );
    });
  }
}