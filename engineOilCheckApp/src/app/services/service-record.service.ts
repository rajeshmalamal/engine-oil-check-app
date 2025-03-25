import { Injectable } from '@angular/core';
import { ServiceRecord } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceRecordService {
  private serviceRecords: ServiceRecord[] = [];

  constructor() { }

  addServiceRecord(record: ServiceRecord) {
    this.serviceRecords.push(record);
  }

  getServiceRecords(): ServiceRecord[] {
    return this.serviceRecords;
  }

  getServiceRecordsByVehicleId(vehicleId: string): ServiceRecord[] {
    return this.serviceRecords.filter(r => r.vehicleId === vehicleId);
  }
}