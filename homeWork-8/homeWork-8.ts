// @ts-ignore:next-line
const VehicleData = require("./data");

// Опишите типы данных для VehicleData

type VehicleType = {
  type: string,
  brand: string,
  model: string,
  platform?: string,
  drive: DriveStages | DriveObj
};

type DriveStages = {
  stages: {
    engineThrust: number,
    engineCount: number,
    engineType: string
    }[],
  supportedEnvironments: string[]
}

type DriveObj = {
  type?: string,
  power?: number,
  torque?: number,
  totalPower?: number,
  engineCount?: number,
  supportedEnvironments: string[]
}


export const vehicles: VehicleType[] = VehicleData;

// реализуйте класс "Транспортное средство" и его потомков
// Ожидаемый вывод getTitle - "VAZ - 2105"
// Ожидаемый вывод getInfo:
//   для всех, кроме вертолётов - "Supported environments: {env}" с
//       перечислением всех доступных окружающих сред
//   для космических кораблей - "Total thrust: {calc}kN Engine count: {cnt}",
//       вместо {calc} - общая тага всех ступеней, вместо {cnt} - общее
//       количество двигателей.
//   для автомобилей - "Power: {pwr}HP Torque: {Tq}Nm", с выводом соотв. значений
//   для вертолётов - "Under secret"
interface VehicleMain {
  getTitle(): string 
  getInfo(): string
}

class Vehicle implements VehicleMain {
  constructor(public vehicle: VehicleType) {
    // todo
  }

  getTitle(): string {
    return this.vehicle.brand + ' ' + this.vehicle.model;
  }
  getInfo(): string {
      return ` Supported environments: ${this.vehicle.drive.supportedEnvironments}`
  }
}

class Helicopters extends Vehicle {
  // constructor(private vehicle: VehicleType) {
  //   super(vehicle)
  // }
  getInfo(): string {
      return "Under secret"
  }
}

class Spacecraft extends Vehicle {
  private calc = 0
  private cnt = 0
  constructor(public vehicle: VehicleType){
    super(vehicle)
  }
  
  getInfo(): string {
      if ('stages' in this.vehicle.drive) {
        this.vehicle.drive.stages.forEach(e => {
          this.calc += e.engineThrust
          this.cnt += e.engineCount
        })
    }
    return super.getInfo() + ` Total thrust: ${this.calc} kN Engine count: ${this.cnt}`
  }
}

class Cars extends Vehicle {
  constructor(public vehicle: VehicleType) {
    super(vehicle)
  }
  getInfo(): string {
      if ('power' in this.vehicle.drive && 'torque' in this.vehicle.drive) {
        return super.getInfo() + ` Power: ${this.vehicle.drive.power} HP Torque: ${this.vehicle.drive.torque}Nm`
      }
    return ''
  }

}


// реализйте функцию конвертации полученнх данных в конечный тип для
// последующего вывода данных о транспортном средстве

export function vehicleFabric(vehicle: VehicleType): Vehicle | null {
  switch (vehicle.type) {
    case 'Helicopter':
      return new Helicopters(vehicle)
    case 'Spacecraft':
      return new Spacecraft(vehicle)
    case 'Car':
      return new Cars(vehicle)
  }
  return new Vehicle(vehicle);
}