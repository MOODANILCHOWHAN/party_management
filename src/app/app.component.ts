import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PartyManagment';
    // Reference to the sidenav
    @ViewChild('sidenav') sidenav!: MatSidenav;

    // Toggle the sidenav
    toggleSidenav() {
      this.sidenav.toggle();
    }
    
}
