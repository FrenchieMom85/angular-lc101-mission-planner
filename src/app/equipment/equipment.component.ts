import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentItems: object[] = [
    { name: 'Duct Tape', mass: 0.5 },
    { name: 'Space Camera', mass: 20 },
    { name: 'Food', mass: 150 },
    { name: 'Oxygen Tanks', mass: 400 },
    { name: 'AE-35 Unit', mass: 5 },
    { name: 'ISS Supplies', mass: 800 },
    { name: 'Water', mass: 250 },
    { name: 'Satellite', mass: 1200 },
    { name: 'R2 Unit', mass: 32 }
  ];
  cargoHold: object[] = [];
  cargoMass: number = 0;
  maximumAllowedMass: number = 2000;
  maxItems: number = 10;
  inHold: boolean = false;

  constructor() { }

  ngOnInit() { }

  addItem(item: object): boolean {
    if (this.cargoHold.includes(item)) {
      this.inHold = true;
    } else {
      this.inHold = false;
    }

    if (this.inHold) {
      let index = this.cargoHold.indexOf(item);
      this.cargoHold.splice(index, 1);
    } else if (!this.inHold && this.cargoHold.length < 3) {
      this.cargoHold.push(item);
    }
    this.cargoMass += item['mass'];
    return this.maximumAllowedMass - this.cargoMass <= 200;
  }

  removeItem(item: object) {
    let index = this.cargoHold.indexOf(item);
    this.cargoHold.splice(index, 1);
    this.cargoMass - item['mass'];
  }

}
