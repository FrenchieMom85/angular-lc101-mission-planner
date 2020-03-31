import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string [] = ["Mars soil sample", "Plant growth in habitat", "Human bone density"]
  experimentBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }
  add(experimentName: string) {
    this.experiments.push(experimentName);
  }
  remove(test: string) {
    let index = this.experiments.indexOf(test);
    this.experiments.splice(index, 1);
  }
  edit(test: string) {
    this.experimentBeingEdited = test;
  }
  save(test: string) {
    test['newTest'] = test;
    this.experimentBeingEdited = null;
  }
}
