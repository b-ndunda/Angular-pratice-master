import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  searchDetails:string
  @Output() searchFull=new EventEmitter<any>();
   
  search(){ 
    this.searchFull.emit(this.searchDetails)
    this.searchDetails = ""
  }  
  constructor() { }

  ngOnInit(): void {
  }
 
}
