import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service'
import { Profile } from '../profile';
import { Repos } from '../repos';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
}) 
export class ProfileComponent implements OnInit {
  user:Profile; 
  repos:Repos;  
         
  constructor(public getService: ProfileServiceService, private repoService:ProfileServiceService) { }
 Get(searchProf){ 
    this.getService.gitSearch(searchProf).then(
      (success)=>{
        this.user = this.getService.getUser;
      }, 
      (error)=>{
        console.log(error) 
      } 
    ); 
    this.repoService.gitRepo(searchProf).then(
      (results)=>{
        this.repos =this.repoService.repos
        console.log(this.repos);
      },  
      (error)=>{
        console.log(error);
      } 
    );  
}    
 
  ngOnInit(){
    this.Get('b-ndunda')
  } 
 
}  
   