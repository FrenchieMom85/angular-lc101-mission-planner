import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
  selectedChoice: string[] = [];
  isChosen: boolean = false;
  constructor() { }

  ngOnInit() { }

  addExperiment(experiment: string) {
    if (this.selectedChoice.includes(experiment)) {
      this.isChosen = true;
    } else {
      this.isChosen = false;
    }

    if (this.isChosen) {
      let index = this.selectedChoice.indexOf(experiment);
      this.selectedChoice.splice(index, 1);
    } else if (!this.isChosen && this.selectedChoice.length < 3) {
      this.selectedChoice.push(experiment);
    }
  }

}
