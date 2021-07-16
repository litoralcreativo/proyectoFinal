const percents = {
    carbsPerDay: 300,
    fatsPerDay: 55,
    proteinsPerDay: 75
}

const nutrients = (obj) => {
    const {carbs, fats, proteins} = obj;
    const {carbsPerDay, fatsPerDay, proteinsPerDay} = percents;
    let newObj = obj;
    newObj.carbs_percent = Math.round(carbs * 10000 / carbsPerDay)/100;
    newObj.fats_percent = Math.round(fats * 10000 / fatsPerDay)/100;
    newObj.proteins_percent = Math.round(proteins * 10000 / proteinsPerDay)/100;
    return newObj;
}

module.exports = {nutrients};
