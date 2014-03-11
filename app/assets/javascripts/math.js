function calcCost(type,level,quantity){
  var typeTroop = type;
  var levTroop = level;
  var quantityTroops = quantity;
  var costToTrain;
  if((typeTroop == 'Barbarian') || (typeTroop == 'barbarian')) {
     if(levTroop === 1){
       costToTrain = 25;
     } else if (levTroop == 2){
       costToTrain = 40;
     } else if (levTroop == 3){
       costToTrain = 60;
     } else if (levTroop == 4){
       costToTrain = 80;
     } else if (levTroop == 5){
       costToTrain = 100;
     } else if (levTroop == 6){
       costToTrain = 150;
     } else if (levTroop == NaN){
       costToTrain = 0;
     }
   } else if((typeTroop == 'Archer') || (typeTroop == 'archer')) {
     if(levTroop === 1){
       costToTrain = 50;
     } else if (levTroop == 2){
       costToTrain = 80;
     } else if (levTroop == 3){
       costToTrain = 120;
     } else if (levTroop == 4){
       costToTrain = 160;
     } else if (levTroop == 5){
       costToTrain = 200;
     } else if (levTroop == 6){
       costToTrain = 300;
     } else if (levTroop == NaN){
       costToTrain = 0;
     }
   } else if((typeTroop == 'Goblin') || (typeTroop == 'goblin')) {
     if(levTroop === 1){
       costToTrain = 25;
     } else if (levTroop == 2){
       costToTrain = 40;
     } else if (levTroop == 3){
       costToTrain = 60;
     } else if (levTroop == 4){
       costToTrain = 80;
     } else if (levTroop == 5){
       costToTrain = 100;
     } else if (levTroop == 6){
       costToTrain = 150;
     } else if (levTroop == NaN){
       costToTrain = 0;
     }
     if(quantityTroops == NaN){
       quantityTroops = 0;
     }
   }
   var finalCost = costToTrain * quantityTroops;
   return finalCost;
} /*End Calc Cost */

function totalCost(){
  var totalCost = Troops.sum("costToTrain");
  console.log('totalCost: ' totalCost);
}