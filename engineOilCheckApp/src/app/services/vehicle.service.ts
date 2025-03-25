import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private vehicles: Vehicle[] = [];

  constructor() { }

  addVehicle(vehicle: Vehicle) {
    this.vehicles.push(vehicle);
  }

  getVehicles(): Vehicle[] {
    return this.vehicles;
  }

  getVehicleById(id: string): Vehicle | undefined {
    return this.vehicles.find(v => v.id === id);
  }
}