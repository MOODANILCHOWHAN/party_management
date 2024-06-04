import { Component ,OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver
    ,private http: HttpClient,private router:Router
  ) { }


  parties: any[]=[]

  // apiUrl = 'https://ap.greatfuturetechno.com';
  // apiKey = '09b97e1ad6a38e3361115d8df28a8d30d167bd6e';

  ngOnInit(): void {
    // this.fetchPartyData();
  }
  navToList(link:string){
    this.router.navigate([link])
  }
  // fetchPartyData() {
  //    const headers = new HttpHeaders().set('Authorization', `Token ${this.apiKey}`);

  //   this.http.get<any[]>(`${this.apiUrl}/party/`, { headers :headers})
  //     .subscribe(
  //       data => {
  //         this.parties = data;
  //       },
  //       error => {
  //         console.error('Error fetching party data:', error);
  //         if (error.status === 401) {
  //           console.error('Unauthorized: Check API key or authentication method.');
  //         }
  //       }
  //     );
  // }
  edit(id:any){

  }
  deleteParty(id:any){

  }
  logOut(){
    localStorage.removeItem('token')
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Log out successfully'
    });
    this.router.navigate([''])
  }
}
