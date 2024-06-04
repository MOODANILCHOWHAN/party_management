import { Component } from '@angular/core';
import { PartyService } from '../party.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-party-details',
  templateUrl: './add-party-details.component.html',
  styleUrl: './add-party-details.component.css'
})
export class AddPartyDetailsComponent {
  formData: any = {
    name: '',
    company_name: '',
    mobile_no: '',
    telephone_no: '',
    whatsapp_no: '',
    email: '',
    remark: '',
    login_access: false,
    date_of_birth: '',
    anniversary_date: '',
    gstin: '',
    pan_no: '',
    apply_tds: false,
    credit_limit: null,
    address: '',
    bank: ''
  };
  selectedFile: File | null = null;

  constructor(private formDataService: PartyService) { }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  submitData(): void {
    Swal.fire({
      title: 'Loading...',
      text: 'Please wait.',
      allowOutsideClick: false,
      didOpen: () => {
          Swal.showLoading()
      }
  });
    const formData = new FormData();
    for (const key in this.formData) {
      if (this.formData.hasOwnProperty(key)) {
        formData.append(key, this.formData[key]);
      }
    }
    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }

    this.formDataService. postData(formData).subscribe((response: any) => {
      Swal.close();
      Swal.fire('Added  ', 'successfully!', 'success');
      console.log('Form submitted successfully', response);
    }, error => {
      Swal.close();
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'something went wrong'
      });
      console.error('Error submitting form', error);
    });
  }
}
