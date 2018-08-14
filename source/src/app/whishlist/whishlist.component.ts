import {Component, HostListener, OnInit} from '@angular/core';

import {WISHES} from './wishes';
import {Wish, Status} from './wish';


@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.css']
})
export class WhishlistComponent implements OnInit {

  public Status = Status;

  wishes: Wish[] = WISHES;

  wishesToComplete : number = 0;

  smartphone: boolean;

  constructor() { }

  ngOnInit() {
    for(let w of this.wishes)
      if (w.status == Status.MISSING)
        this.wishesToComplete++;

    this.smartphone = (window.innerWidth) < 660;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const target = event.target;
    this.smartphone = target.innerWidth < 660;
  }

}
