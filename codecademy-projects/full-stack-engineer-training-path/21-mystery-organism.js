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

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      let tempBase;
      let selectedIndex = Math.floor(Math.random() * dna.length);
      do {
        tempBase = returnRandBase();
      } while (dna[selectedIndex] === tempBase)
      dna[selectedIndex] = tempBase;
      return dna;
    },
    compareDNA(pAequor) {
      let counter1 = 0;  
      for(let j = 0; j < dna.length; j++) {
          if(dna[j] === pAequor.dna[j]) {
            counter1++;
        }
      }
      console.log(`${specimenNum} and ${pAequor.specimenNum} have ${Math.floor(counter1 / dna.length * 100)}% in common.`)
    },
    willLikelySurvive() {
      let counter2 = 0;
      for(let k = 0; k < dna.length; k++) {
        if(dna[k] === ('C' || 'G')) {
          counter2++;
        }
      }
      return counter2 / dna.length >= 0.6;  
    },
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

let pAequorWorkBase = [];
let counter3 = 1;

do {
  let pAequor = pAequorFactory(counter3, mockUpStrand());
  if(pAequor.willLikelySurvive() > 0.6) {
    pAequorWorkBase.push(pAequor);
    counter3++;
  }
} while (pAequorWorkBase.length < 30);

const mostRelatedInstances = (pAequorBase) => {
  let relationsArr = [];
  for(let m = 0; m < (pAequorBase.length - 1); m++) {
    for(let n = m + 1; n < pAequorBase.length; n++) {
      relationsArr.push({
        instance1: pAequorBase[m].specimenNum,
        instance2: pAequorBase[n].specimenNum,
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