import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userProfile: UserProfile = {
    name: "Gabe Tarrant",
    contact: "248-248-2480",
    bio: "It's so cold in the D",
  }
  constructor() { }

  getUserProfile = () =>{
    return this.userProfile;
  };

  setUserProfile = (newUserProfile: UserProfile): void =>{
    this.userProfile = newUserProfile;
  };
}
