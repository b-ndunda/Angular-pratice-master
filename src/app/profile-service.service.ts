import { Injectable } from '@angular/core';
import { Profile } from './profile';
import { Repos } from './repos';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  getUser: Profile;
  repos: Repos;

  constructor(private http: HttpClient) {
    this.getUser = new Profile("", "", "", "", 0, 0, 0, "","", new Date);
    this.repos = new Repos("", "", "", new Date, 0, 0, "");
  }
  gitSearch(searchProf: string) {
    interface Responce {
      url: string,
      login: string;
      html_url: string;
      location: string
      public_repos: number;
      followers: number;
      following: number;
      avatar_url: string;
      bio:string;
      created_at: Date;

    }
    return new Promise((resolve, reject) => {
      this.http.get<Responce>('https://api.github.com/users/' + searchProf + '?access_token=' + environment.Apikey).toPromise().then(
        (result) => {
          this.getUser = result;
          console.log(this.getUser);
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
  gitRepo(searchProf) {
    interface Repos {
      name: string;
      html_url: string;
      description: string;
      forks: number;
      watchers_count: number;
      language: string;
      created_at: Date;
    }
    return new Promise((resolve, reject) => {
      this.http.get<Repos>('https://api.github.com/users/' + searchProf + "/repos?order=created&sort=asc?access_token=" + environment.Apikey).toPromise().then(
        (results) => {
          this.repos = results;
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
}
