import { Vehicle, ElectricCar, ICECar } from "./types";

// ВАЖНО: ни в одной задаче нельзя использовать глобальные
// переменные. Проверяться будет только содержание уже
// существующих деклараций файла

// Необходимо описать класс "Привод", который будет принимать
// тип привода автомобиля ("FWD", "RWD", "AWD"). Предусмотреть
// метод canDrive(cover), который на основе полученного параметра
// будет определять может ли автомобиль передвигаться по поверхности:
// - "asphalt" доступен для всех;
// - "sand" доступен для полного привода ("AWD");
// - "rocks" не доступен для всех;
// - при получении иных вариантов параметра — выбрасывать ошибку
export class Drive {
  constructor(typeDrive) {
    this.typeDrive = typeDrive;
    this.canDrive = this.canDrive.bind(this);
  }
  canDrive(cover) {
    try {
      if (cover === "asphalt") return this.typeDrive;
      else if (cover === "sand" && this.typeDrive === "AWD")
        return this.typeDrive;
      else if (cover === "rocks") return;
      else throw new Error("not implemented");
    } catch (e) {
      throw e.message;
    }
  }
}

// Необходимо описать класс "Зарядная станции" для зараядки
// электирческих автомобилей (chargeVehicle должен вызывать vehicle.charge()).
// Имейте в виду, что электромобили возгараются от перезарядки
// (>100%) или при слишком интенсивной зарадке (импульс заряда должен
// быть не чаще чем 1раз в 0,5сек).
export class Charger {
  count = 500
  chargePerSecond = 10
  chargeInterval = 500
  arr = []

  chargeVehicle(vehicle) {
    try {
      if(vehicle instanceof ElectricCar) {
        this.arr.push(vehicle.id)
        let newSet = new Set(this.arr)
        let newArr = Array.from(newSet)
         if (this.count <= newArr.length * this.chargePerSecond * this.chargeInterval) {
           if(vehicle.battery < 100) {
             setTimeout(vehicle.charge, this.count)
             this.count += 500
           }
         }
         
       } else {
        throw new Error("not implemented")
       }
    } catch(e) {
      throw e.message;
    }
    
    
  }
}

// Унаследуйте класс Vehicle. Необходимо создать класс таким образом,
// чтоб пробег всех автомобилей можно было получить без параметров.
// Реализуйте функцию получения суммарного пробега всех автомобилей

export class Car extends Vehicle {
  static total = 0;
  trip(mileage) {
    try {
      super.trip(mileage);
      Car.total += mileage;
    } catch {
      throw new Error("not implemented");
    }
  }
}

export function getTotalCarsMileage() {
  return Car.total;
}