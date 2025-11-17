import { Component, inject, signal } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import { UserService } from "../../../user.service";

@Component({
  selector: 'app-header',
  imports: [
    MatToolbar,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  title = signal("Centre de formations");
  userService = inject(UserService);

  toggleAdminMode() {
    this.userService.toggleUserRole();
}
}