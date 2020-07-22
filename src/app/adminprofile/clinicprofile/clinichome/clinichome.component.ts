import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinichome',
  templateUrl: './clinichome.component.html',
  styleUrls: ['./clinichome.component.css']
})
export class ClinichomeComponent implements OnInit {
  hidden: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggleHidden() {
    this.hidden = !this.hidden;
  }
  
}
