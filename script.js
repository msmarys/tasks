// счетчик воды
const waterUsed = 12.5; 
const pricePerCubicMeter = 42.8; 

const totalWaterCost = waterUsed * pricePerCubicMeter;
console.log(`За воду плати: ${totalWaterCost.toFixed(2)} ₽`);

//такси
const baseCost = 150; 
const distance = 8.3; 
const costPerKm = 12; 

const totalTaxiFare = baseCost + distance * costPerKm;
console.log(`Твоя поездка стоит: ${totalTaxiFare.toFixed(2)} ₽`);

// градусы в радианы
const degrees = parseFloat(prompt("Угол в градусах:"));

if (!isNaN(degrees)) {
  const radians = (degrees * Math.PI) / 180;
  alert(`${degrees} градусов = ${radians.toFixed(3)} радиан`);
} else {
  alert("О_о нужно число");
}