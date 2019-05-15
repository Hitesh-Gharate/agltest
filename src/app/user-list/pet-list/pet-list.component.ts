import { Component, OnInit, Input } from '@angular/core';
import { Pets } from '../../services-data/user.interface';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {

  @Input() userData: Pets;
  constructor() { }

  ngOnInit() {
  }

}
