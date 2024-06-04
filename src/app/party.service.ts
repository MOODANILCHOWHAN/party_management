import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  
  apiUrl = 'https://ap.greatfuturetechno.com';
  apiKey = `Token ${localStorage.getItem('token')}`;

  constructor(private http: HttpClient,private router:Router) { }
  headers=new HttpHeaders({
    'Authorization':this.apiKey
  });
  
  logIn(data:any){
   
    this.http.post<any>(`${this.apiUrl}/login/`, data).subscribe(
      (response) => {
       
        // Assuming the token is in the response
        const token = response.token;
        // Store the token in local storage or cookie
        localStorage.setItem('token', token);
        Swal.fire('Log in ', 'successfully!', 'success');
        this.router.navigate(['partList'])
        // Redirect the user to the dashboard or wherever needed
      },
      (error) => {
      
        // Handle login error
        console.error('Login failed:', error);
        Swal.fire('Log in failed ', 'something went wrong!', 'error');
      }
    )
  }

  getData():Observable<any>{
    const headers=this.headers
    console.log(headers);
    return  this.http.get<any[]>(`${this.apiUrl}/party/`, { headers:headers})
  }
  postData(formData: FormData) {
   
    const headers=this.headers
    return this.http.post(`${this.apiUrl}/party/`, formData, { headers});
  }

  deleteItem(id: number): Observable<any> {
   const headers=this.headers
    const url = `${this.apiUrl}/party/?id=${id}`;
    return this.http.delete(url,{headers});
  }

  id:number=0;
  setId(id:number){
    this.id=id
  }

  getIdDetails():Observable<any>{
    const headers=this.headers;
    const url = `${this.apiUrl}/party/?id=${this.id}`;
    return this.http.get(url,{headers})
  }

  updateData(data:any):Observable<any>{
    const headers=this.headers;
    const url = `${this.apiUrl}/party/?id=${this.id}`;
    return this.http.put(url,data,{headers})
  }
}
