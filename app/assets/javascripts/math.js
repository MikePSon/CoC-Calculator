function calcCost(type,level,quantity){
  var typeTroop = type;
  var levTroop = level;
  var quantityTroops = quantity;
  var costToTrain;
  if(typeTroop == 'Barbarian') {
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
     } else if (levTroop == null){
       costToTrain = 0;
     }
   } else if(typeTroop == 'Archer') {
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
     } else if (levTroop == null){
       costToTrain = 0;
     }
   } else if(typeTroop == 'Goblin') {
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
     } else if (levTroop == null){
       costToTrain = 0;
     }
   } else if(typeTroop == 'Giant') {
       if(levTroop === 1){
         costToTrain = 500;
       } else if (levTroop == 2){
         costToTrain = 1000;
       } else if (levTroop == 3){
         costToTrain = 1500;
       } else if (levTroop == 4){
         costToTrain = 2000;
       } else if (levTroop == 5){
         costToTrain = 2500;
       } else if (levTroop == 6){
         costToTrain = 3000;
       } else if (levTroop == null){
         costToTrain = 0;
       }
     } else if(typeTroop == 'Wall Breaker') {
         if(levTroop === 1){
           costToTrain = 1000;
         } else if (levTroop == 2){
           costToTrain = 1500;
         } else if (levTroop == 3){
           costToTrain = 2000;
         } else if (levTroop == 4){
           costToTrain = 2500;
         } else if (levTroop == 5){
           costToTrain = 3000;
         } else if (levTroop == 6){
           costToTrain = 3500;
         } else if (levTroop == null){
           costToTrain = 0;
         }
      } else if(typeTroop == 'Balloons') {
          if(levTroop === 1){
            costToTrain = 2000;
          } else if (levTroop == 2){
            costToTrain = 2500;
          } else if (levTroop == 3){
            costToTrain = 3000;
          } else if (levTroop == 4){
            costToTrain = 3500;
          } else if (levTroop == 5){
            costToTrain = 4000;
          } else if (levTroop == 6){
            costToTrain = 4500;
          } else if (levTroop == null){
            costToTrain = 0;
          }
       } else if(typeTroop == 'Wizard') {
           if(levTroop === 1){
             costToTrain = 1500;
           } else if (levTroop == 2){
             costToTrain = 2000;
           } else if (levTroop == 3){
             costToTrain = 2500;
           } else if (levTroop == 4){
             costToTrain = 3000;
           } else if (levTroop == 5){
             costToTrain = 3500;
           } else if (levTroop == 6){
             costToTrain = 4000;
           } else if (levTroop == null){
             costToTrain = 0;
           }
        } else if(typeTroop == 'Healer') {
            if(levTroop === 1){
              costToTrain = 5000;
            } else if (levTroop == 2){
              costToTrain = 6000;
            } else if (levTroop == 3){
              costToTrain = 8000;
            } else if (levTroop == 4){
              costToTrain = 10000;
            }
         } else if(typeTroop == 'Dragon') {
             if(levTroop === 1){
               costToTrain = 1900;
             } else if (levTroop == 2){
               costToTrain = 2100;
             } else if (levTroop == 3){
               costToTrain = 2300;
             } else if (levTroop == 4){
               costToTrain = 2500;
             }
          } else if(typeTroop == 'PEKKA') {
              if(levTroop === 1){
                costToTrain = 3800;
              } else if (levTroop == 2){
                costToTrain = 3100;
              } else if (levTroop == 3){
                costToTrain = 3500;
              } else if (levTroop == 4){
                costToTrain = 4000;
              }
           }
     if(quantityTroops == 0){
       quantityTroops = 0;
     }
   var finalCost = costToTrain * quantityTroops;
   return finalCost;
}
