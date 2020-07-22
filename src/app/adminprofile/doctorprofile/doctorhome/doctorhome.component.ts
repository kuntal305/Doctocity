import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctorhome',
  templateUrl: './doctorhome.component.html',
  styleUrls: ['./doctorhome.component.css']
})
export class DoctorhomeComponent implements OnInit {
  hidden:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggleHidden() {
    this.hidden = !this.hidden;
  }

}
