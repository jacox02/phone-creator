class Phone {
  setBattery(battery) {
    this.battery = battery;
    return this;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setModel(model) {
    this.model = model;
    return this;
  }
  setStorage(storage) {
    this.storage = storage;
    return this;
  }

  setScreen(screen) {
    this.screen = screen;
    return this;
  }

  build() {
    console.log(this);
  }
}
let phones = [];

let iPhone = new Phone()
  .setName("iPhone")
  .setModel("7+")
  .setBattery("1280 mAh")
  .setStorage("128GB")
  .setScreen("5.5")
  .build();

console.log(iPhone);
module.exports = Phone;
