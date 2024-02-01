// Define ENUMs for car_type and engine_type
enum CarType {
    Sedan = "sedan",
    SUV = "suv",
    Sport = "sport",
  }
  
  enum EngineType {
    Fuel = "fuel",
    Electric = "electric",
  }
  
  // Define an interface for the car object
  interface Car {
    id: number;
    car_name: string;
    price: number;
    year: string;
    car_type: CarType;
    engine_type: EngineType;
  }
  