import { Component } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { ServiceRecordService } from '../services/service-record.service';
import { Vehicle } from '../models/vehicle.model';
import { ServiceRecord } from '../models/service.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage {
  vehicles: Vehicle[];
  selectedVehicleId: string;
  serviceRecords: ServiceRecord[];

  constructor(private vehicleService: VehicleService, private serviceRecordService: ServiceRecordService) {
    this.vehicles = this.vehicleService.getVehicles();
  }

  fetchServiceHistory() {
    this.serviceRecords = this.serviceRecordService.getServiceRecordsByVehicleId(this.selectedVehicleId);
  }
}