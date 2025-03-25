import { Component } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../models/vehicle.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  ownerName: string;
  vehicleNumber: string;
  model: string;

  constructor(private vehicleService: VehicleService, private router: Router) { }

  registerVehicle() {
    const newVehicle: Vehicle = {
      id: Math.random().toString(36).substr(2, 9),
      ownerName: this.ownerName,
      vehicleNumber: this.vehicleNumber,
      model: this.model,
      lastServiceDate: new Date()
    };
    this.vehicleService.addVehicle(newVehicle);
    this.router.navigate(['/home']);
  }
}