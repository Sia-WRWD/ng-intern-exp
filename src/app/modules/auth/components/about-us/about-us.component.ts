import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollTop(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

    scrollNext(id: HTMLElement) {
      id.scrollIntoView({behavior: 'smooth'});
    }
}
