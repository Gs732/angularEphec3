import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  imports: [DatePipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userService = inject(UserService);
  user = this.userService.currentUser;
}
