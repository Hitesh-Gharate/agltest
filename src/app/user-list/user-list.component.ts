import { Component, OnInit } from '@angular/core';
import { DataService } from '../services-data/data.service';
import { DataStore } from '../services-data/dataStore';
import { UserData, Pets } from '../services-data/user.interface';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  maleUser: Array<Pets>;
  femaleUser: Array<Pets>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getUserData().subscribe((res) => {
      this.dataSortOut(DataStore.USER_DATA);
    });
  }
  dataSortOut(userList: UserData) {
    this.maleUser = this.GenderAndPetFilter(userList, 'Male', 'Cat');
    this.femaleUser = this.GenderAndPetFilter(userList, 'Female', 'Cat');
  }
  GenderAndPetFilter(userList: any, gender: string, pet: string) {
    const  array = [];

    userList.filter(function(user) {
      if (user.gender === gender) {
        if (user.pets !== null) {
          for (let i = 0; i < user.pets.length; i++) {
            if (user.pets[i].type === pet) {
              array.push(user.pets[i]);
            }
          }
      }
     }
  });
    return array;
  }
}
