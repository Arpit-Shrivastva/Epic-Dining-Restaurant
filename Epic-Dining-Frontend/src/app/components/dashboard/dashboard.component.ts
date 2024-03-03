import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/guards/auth-service.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(
    private tokenService: TokenService,
    private authService: AuthServiceService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  showText: boolean = true;

  logout() {
    this.authService.logout();
    this.tokenService.clearToken();
    this.router.navigateByUrl("");
  }
}
