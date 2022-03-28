/*
PROJECT GOALS
Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study.

As you progress through the steps, use the terminal and console.log() statements to check the output of your loops and functions.
*/

//SOLUTION
// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

/*Create a factory function pAequorFactory() that has two parameters:
  - number (no two organisms should have the same number)
  - array of 15 DNA bases
and returns an object that contains the properties specimenNum and dna that correspond to the parameters provided
*/
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    //Add the method .mutate() that is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.
    mutate() {
      let tempBase;
      let selectedIndex = Math.floor(Math.random() * dna.length);
      do {
        tempBase = returnRandBase();
      } while (dna[selectedIndex] === tempBase)
      dna[selectedIndex] = tempBase;
      return dna;
    },
    //Add the method .compareDNA() that has one parameter (another pAequor object), the method behavior is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical and in the same locations. The method does not return anything, but prints a message that states the percentage of DNA the two objects have in common — use the .specimenNum to identify which pAequor objects are being compared.
    compareDNA(pAequor) {
      let counter1 = 0;  
      for(let j = 0; j < dna.length; j++) {
          if(dna[j] === pAequor.dna[j]) {
            counter1++;
        }
      }
      console.log(`${specimenNum} and ${pAequor.specimenNum} have ${Math.floor(counter1 / dna.length * 100)}% in common.`)
    },
    //Add the method .willLikelySurvive() that returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, the method returns false.
    willLikelySurvive() {
      let counter2 = 0;
      for(let k = 0; k < dna.length; k++) {
        if(dna[k] === ('C' || 'G')) {
          counter2++;
        }
      }
      return counter2 / dna.length >= 0.6;  
    },
    //Create the .complementStrand() method that returns the complementary DNA strand. The rules are that 'A's match with 'T's and vice versa. Also, 'C's match with 'G's and vice versa.
    complementStrand() {
      for(let l = 0; l < dna.length; l++) {
        switch(dna[l]) {
          case 'A': dna[l] = 'T'; break;
          case 'T': dna[l] = 'A'; break;
          case 'C': dna[l] = 'G'; break;
          default: dna[l] = 'C'; break;
        } 
      }
      return dna;
    }
  };
};

//Create 30 instances of pAequor that can survive in their natural environment. Store these instances in an array.
let pAequorWorkBase = [];
let counter3 = 1;

do {
  let pAequor = pAequorFactory(counter3, mockUpStrand());
  if(pAequor.willLikelySurvive() > 0.6) {
    pAequorWorkBase.push(pAequor);
    counter3++;
  }
} while (pAequorWorkBase.length < 30);

//Use the .compareDNA() to find the two most related instances of pAequor.
const mostRelatedInstances = (pAequorBase) => {
  let relationsArr = [];
  for(let m = 0; m < (pAequorBase.length - 1); m++) {
    for(let n = m + 1; n < pAequorBase.length; n++) {
      relationsArr.push({
        instance1: pAequorBase[m].specimenNum,
        instance2: pAequorBase[n].specimenNum,
        //The modified .compareDNA() function 
        relationPower: function() {
          let counter4 = 0;
          for(let o = 0; o < 15; o++) {
            if(pAequorBase[m].dna[o] === pAequorBase[n].dna[o]) {
              counter4++;
            }
          }
          return Math.floor(counter4 / 15 * 100); 
        }
      });         
    }      
  }
  relationsArr.sort((a, b) => b.relationPower() - a.relationPower());
  console.log(`Two most related instances of the taken pAequorBase are:
    - ${relationsArr[0].instance1} and ${relationsArr[0].instance2} with the power of relation ${relationsArr[0].relationPower()}%;
    - ${relationsArr[1].instance1} and ${relationsArr[1].instance2} with the power of relation ${relationsArr[1].relationPower()}%;`);
}

//Check the solution
let testBase1 = mockUpStrand();
let pAequor1 = pAequorFactory(1, testBase1);
console.log(`pAequor1.dna is: ${pAequor1.dna}`);

console.log(`pAequor1.mutate() is: ${pAequor1.mutate()}`);

let testBase2 = mockUpStrand();
let pAequor2 = pAequorFactory(2, testBase2);
console.log(`pAequor2.dna is: ${pAequor2.dna}`);

pAequor1.compareDNA(pAequor2);

console.log(`pAequor1.willLikelySurvive() is: ${pAequor1.willLikelySurvive()}`);

console.log(`The pAequorWorkBase is:`);
for(let m = 0; m < pAequorWorkBase.length; m++) {
  console.log(`DNA [${pAequorWorkBase[m].dna}] contains at least 60% 'C' or 'G' bases: ${pAequorWorkBase[m].willLikelySurvive()}`);
}

console.log(pAequor1.complementStrand());

mostRelatedInstances(pAequorWorkBase);