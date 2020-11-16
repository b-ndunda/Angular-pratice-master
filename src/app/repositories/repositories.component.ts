import { Component, OnInit } from '@angular/core';
import {ProfileServiceService} from '../profile-service.service'
import { Repos } from '../repos';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repos:Repos;

  constructor(public repoService: ProfileServiceService) { }

  getyourRepo(searchDetails){
    this.repoService.gitRepo(searchDetails).then(
      (results)=>{
        this.repos =this.repoService.repos
        console.log(this.repos);
      },  
      (error)=>{
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getyourRepo('b-ndunda');
  }

} 
