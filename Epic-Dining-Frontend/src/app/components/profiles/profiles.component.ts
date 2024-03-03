import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/Models/register';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  register: Register[] = [];

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.registerService.getAllUser().subscribe((data) => {
      this.register = data;
    },
      (error) => {
        console.log(error);
      })
  };

}
