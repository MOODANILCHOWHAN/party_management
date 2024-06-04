import { Component,OnInit } from '@angular/core';
import { PartyService } from '../party.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  userDetails:any;
  ngOnInit(): void {
      this.party.getIdDetails().subscribe(
        (data)=>{
          console.log(data);
          this.userDetails=data
        }
      )
  }
  constructor(private party:PartyService,private router:Router){

  }
  edit(id:any){
    this.party.setId(id);
    this.router.navigate(['edit'])
  }
  deleteParty(id:any){
    this.party.deleteItem(id).subscribe(
      response => {
        console.log('Item deleted successfully', response);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Party Deleted successfully'
        });
        this.router.navigate(['partList'])
      },
      error => {
        console.error('Error deleting item', error);
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Failed to Delete'
        });
      }
    );
  }
}
