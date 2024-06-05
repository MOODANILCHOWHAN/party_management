import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { PartyService } from '../party.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrl: './party-list.component.css'
})
export class PartyListComponent {

  parties: any[]=[]

  apiUrl = 'https://ap.greatfuturetechno.com';
  // apiKey = 'Token 93142e878130fa22de95fb2c6a0c310a15224cca';
  constructor(private http: HttpClient,
              private party:PartyService,
              private router:Router) { 
                if (!localStorage.getItem('token')) {
                  Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'something went wrong. need to log in.'
                  });
                  this.router.navigate([''])
                }
              }

  ngOnInit(): void {
    setTimeout(()=>{
      this.fetchPartyData();
    },1000)
    
  }

  fetchPartyData() {
    Swal.fire({
      title: 'Loading...',
      text: 'Please wait.',
      allowOutsideClick: false,
      didOpen: () => {
          Swal.showLoading()
      }
  });
    this.party.getData().subscribe(data => {
      Swal.close();
        this.parties = data;
      },(error)=>{
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'something went wrong'
        });
      }
    );
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
        this.fetchPartyData()
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
  details(id:number){
    this.party.setId(id);
    this.router.navigate(['details'])
  }
}
