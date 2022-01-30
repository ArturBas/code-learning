/*
The one and only task in this article concerns accessing JSON data and using it in your page. JSON data about some mother cats and their kittens is available in sample.json. The JSON is loaded into the page as a text string and made available in the catString parameter of the displayCatInfo() function, called when the provided promise chain (which starts by fetching the JSON data) is fulfilled. Your task is to fill in the missing parts of the displayCatInfo() function to store:

- The names of the three mother cats, separated by commas, in the motherInfo variable.
- The total number of kittens, and how many are male and female, in the kittenInfo variable.

The values of these variables are then printed to the screen inside paragraphs.

Some hints/questions:

- The JSON data is provided as text inside the displayCatInfo() function. You'll need to parse it into JSON before you can get any data out of it.
- You'll probably want to use an outer loop to loop through the cats and add their names to the motherInfo variable string, and an inner loop to loop through all the kittens, add up the total of all/male/female kittens, and add those details to the kittenInfo variable string.
- The last mother cat name should have an "and" before it, and a full stop after it. How do you make sure this can work, no matter how many cats are in the JSON?

- Why are the para1.textContent = motherInfo; and para2.textContent = kittenInfo; lines inside the displayCatInfo() function, and not at the end of the script? This has something to do with async code. 

MY ANSWER: This method allows limiting a potential communication issue between the webpage and an external resource of content to the particular web-section. The whole process of retreving content from external resource is modularized to the function displayCatInfo() and does not block executing of the rest of code.

Try updating the live code below to recreate the finished example:
*/    
    const section = document.querySelector('section');

    let para1 = document.createElement('p');
    let para2 = document.createElement('p');

    let motherInfo = 'The mother cats are called ';
    let kittenInfo;

    fetch('sample.json')
    .then(response => response.text())
    .then(text => displayCatInfo(text))

    function displayCatInfo(catString) {
        let total = 0;
        let male = 0;

        // Add your code here

        const cat = JSON.parse(catString);

        for (let i = 0; i < cat.length; i++) {
            if (i < (cat.length - 1)) {
            motherInfo += `${cat[i].name}, `;
            } else {
            motherInfo += `and ${cat[i].name}.`;
            }
            
            const kittens = cat[i].kittens;
            for (let j = 0; j < kittens.length; j++) {
                if (kittens[j].gender === "m") {
                    male += 1;
                }
                total += 1;
                kittenInfo = `The total number of kittens is ${total}, including ${male} male and ${total - male} female ones.`;
            }
        }

        // Don't edit the code below here!

        para1.textContent = motherInfo;
        para2.textContent = kittenInfo;
    }

section.appendChild(para1);
section.appendChild(para2);