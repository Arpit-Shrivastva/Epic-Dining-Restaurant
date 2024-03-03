import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/Models/register';
import { AuthServiceService } from 'src/app/guards/auth-service.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: string = '';

  constructor(private authService: AuthServiceService,
    private registerService: RegisterService) { }

  ngOnInit(): void {
    this.registerService.getUser().subscribe(
      (data: Register) => {
        if (Array.isArray(data) && data.length > 0) {
          this.userName = data[0].firstName;
        } else {
          console.error('User data is undefined or empty.');
        }
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }


  isUserLoggedIn(): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }
    return false;
  }
}
