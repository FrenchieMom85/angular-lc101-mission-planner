import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  currentCrew: boolean = false;
  crew: object[] = [];

  candidates: object[] = [
    { name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg', age: 40, experience: "15 years" },
    { name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg', age: 27, experience: "5 years" },
    { name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg', age: 45, experience: "20 years" },
    { name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg', age: 48, experience: "15 years" },
    { name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg', age: 50, experience: "25 years" },
    { name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg', age: 31, experience: "10 years" },
    { name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg', age: 29, experience: "8 years" }
  ];

  constructor() { }

  ngOnInit() { }

  addCrewMember(member: object) {
    if (this.crew.includes(member)) {
      this.currentCrew = true;
    } else {
      this.currentCrew = false;
    }

    if (this.currentCrew) {
      let index = this.crew.indexOf(member);
      this.crew.splice(index, 1);
    } else if (!this.currentCrew && this.crew.length < 3) {
      this.crew.push(member);
    }
  }

}
