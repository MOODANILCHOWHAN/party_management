import { Component } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent {
  images = [
    'assets/Dashboard Login.jpg',
    'assets/Dashboard Login.jpg',
    'assets/Dashboard Login.jpg',
    'assets/Dashboard Login.jpg',
    'assets/Dashboard Login.jpg',
    'assets/Dashboard Login.jpg'
  ];
  btns=[
    'All','1:1 Call','Priority', 'DM','Digital', 'Product','Package'
  ]
  currentIndex = 0;
  transformStyle = 'translateX(0)';

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
  
  
}

