import { Component } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { ServiceRecordService } from '../services/service-record.service';
import { Vehicle } from '../models/vehicle.model';
import { ServiceRecord } from '../models/service.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage {
  vehicles: Vehicle[];
  selectedVehicleId: string;
  serviceType: string;
  notes: string;

  constructor(private vehicleService: VehicleService, private serviceRecordService: ServiceRecordService, private router: Router) {
    this.vehicles = this.vehicleService.getVehicles();
  }

  performService() {
    const serviceRecord: ServiceRecord = {
      id: Math.random().toString(36).substr(2, 9),
      vehicleId: this.selectedVehicleId,
      serviceDate: new Date(),
      serviceType: this.serviceType,
      notes: this.notes
    };
    this.serviceRecordService.addServiceRecord(serviceRecord);
    this.router.navigate(['/home']);
  }
}