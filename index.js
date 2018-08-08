function produceDrivingRange(range) {
  return function(start, end) {
    const distance = Math.abs(parseInt(start) - parseInt(end))
    const diff = range - distance
    if (diff > 0) {
      return `within range by ${diff}`
    } else {
      return `${Math.abs(diff)} blocks out of range`
    }
  }
}
function produceTipCalculator(tipPercent) {
  return function(fare) {
    return fare * tipPercent
  }
}
function createDriver() {
  let DriverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++DriverId
    }
  }
}
