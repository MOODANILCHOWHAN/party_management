import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent {
  @ViewChild('experiance') experianceSection!: ElementRef;
  @ViewChild('project') projectSection!:ElementRef ;
  @ViewChild('education') educationSection!:ElementRef;
  @ViewChild('skills') skillsSection!:ElementRef;
  @ViewChild('contact') contactSection !:ElementRef;
  activeButton = "All";
  images = [
    'assets/Dashboard Login.jpg',
    'assets/Dashboard Login.jpg',
    'assets/Dashboard Login.jpg',
    'assets/Dashboard Login.jpg',
    'assets/Dashboard Login.jpg',
    'assets/Dashboard Login.jpg'
  ];
  btns=[
    'All','Experiance','Projects','Education','Skills','Contact'
  ]
  currentIndex = 0;
  transformStyle = 'translateX(0)';

  educations=[
    {
      degree:'B.tech',
      university:'Jawaharlal Nehru Technological University, Hyderabad',
      collage:'Malla Reddy College of Engineering',
      strem:'Mechanical Engineering',
      year:'2019 to 2022',
      cgpa:'6.8 CGPA'
    },
    {
      degree:'Diploma',
      university:'State Board of Technical Education and Training',
      collage:'Malla Reddy College of Engineering',
      strem:'Mechanical Engineering',
      year:'2016 to 2019',
      cgpa:'80 %'
    },
    {
      degree:'SSC',
      university:'State Board of Secondary Education',
      collage:'Malla Reddy College of Engineering',
      strem:'General',
      year:'2016',
      cgpa:'8.6 CGPA'
    }
  ]

  contact: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contact = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', Validators.required],
      message: ['']
    });
  }
  ngOnInit(): void {
    this.startSlider();
  }

  startSlider(): void {
    // Start from the first image
    this.currentIndex = 0;
  
    setInterval(() => {
      // Move to the next image
      this.currentIndex++;
  
      // If we reach the duplicate image (last one), reset to the first image
      if (this.currentIndex > this.images.length) {
        this.currentIndex = 0;
        // Reset transform immediately without transition for a smooth loop
        this.transformStyle = `translateX(0%)`;
      } else {
        this.transformStyle = `translateX(-${this.currentIndex * 15}%)`;
      }
    }, 3000);
  }
  
  scrollToSection(i: string) {
    this.activeButton = i;
    switch (i) {
      case '1:1 Call':
        // Implement scrolling for '1:1 Call' here if needed
        break;
      case 'Experiance':
        this.experianceSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Projects':
        this.projectSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Education':
        this.educationSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Skills':
        this.skillsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Contact':
        this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }
  showDetail:boolean=false;
  showFeDetails:boolean=false;
  hideDEtails(){
    this.showDetail=false;
  }
  showDetails(){
    this.showDetail=true
  }
  showFe(){
    this.showFeDetails=!this.showFeDetails
  }
}

