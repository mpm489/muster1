import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['7.jpg','8.jpg','10.jpg', '12.jpg'];
  headlines = [
   'many wolfs in forest',
   'one pair wolf in forest',
   'fliegende Eule in der Nacht',
    'Eule auf dem Jagd'];
  currentImage = 0;
  showImage = true;
 
  ngOnInit(){
  this.updateImage();
  }
 
  updateImage() {
 
 setInterval(()=> {
   this.currentImage++;
   this.currentImage = this.currentImage % this.images.length;
   this.showImage = false;
   
   setTimeout(()=>{
     this.showImage = true;
   }, 10);
 }, 8000);
 
  }
 

}
