import { Component ,OnInit} from '@angular/core';
import { PartyService } from '../party.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  userDetails!: FormGroup;

  constructor(private party: PartyService, private fb: FormBuilder,private router:Router) {}

  ngOnInit(): void {
    this.gettingData();
    this.userDetails = this.fb.group({
      name: [''],
      company_name: [''],
      mobile_no: [''],
      telephone_no: [''],
      whatsapp_no: [''],
      email: [''],
      date_of_birth: [''],
      anniversary_date: [''],
      gstin: [''],
      pan_no: [''],
      apply_tds: [false],
      credit_limit: [''],
      address: [''],
      bank_id: [''],
      remark: [''],
      login_access: [false],
     
    });
  }

  gettingData() {
    this.party.getIdDetails().subscribe(
      (data) => {
        console.log(data);
        this.userDetails.patchValue(data);
        
        // this.router.navigate(['partList'])
      },
      (error) => {
        console.error('Error fetching data', error);
        
      }
    );
  }

  onSubmit() {
    console.log(this.userDetails.value);
    this.party.updateData(this.userDetails.value).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Party edited successfully'
        });
        this.router.navigate(['partList'])
      },(error)=>{
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Failed to edit'
        });
      }
    )
  }
}