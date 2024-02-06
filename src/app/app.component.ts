import { Component, HostListener } from '@angular/core';

@Component({ selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css'] })
export class AppComponent {
  navBarBg : any;

  @HostListener('document:scroll') 
  scrollOverNavBarEffect () {
      this.navBarBg = { 'bg-black' : ( document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) }
  }
}