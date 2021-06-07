
    const d = (function () {
        const debug = true;
    
        function log(message) {
            if (debug) {
                console.log(message)
            }
        }

        function group(groupName = 'default') {
            if (debug) {
                console.group(groupName);
            }
        }

        function groupEnd() {
            if (debug) {
                console.groupEnd();
            }
        }

        function table(obj) {
            if (debug) {
                console.table(obj);
            }
        }
            
        return {
            log: log,
            group: group,
            groupEnd: groupEnd,
            table: table

        };
    })();
    // Create Dino Constructor

    function test() {
        return true;
    }

    function Dinos() {
        const dinos = dinoData['Dinos'];
        
        return {
            getSpeciesList: function () {
                return dinos.map((item) => item.species);                        
            },
            getDinos: function() {
                return dinos;
            },
            getDino: function(species) {
                for (const dino of dinos) {
                    if (dino.species == species) {
                        return dino;
                    }
                }
            }
        }
    }

    // Create Dino Objects

    function getDinos(speciesArray) {
        const result = dinos.getDinos();
    }

    // Create Human Object

    function sanitizeNumber(a_string) {
        try {
            return parseInt(a_string);
        } catch (e) {
        
        }
        return parseInt(string);
    }


    function Human(name, heightFeet, heightInch, weight, diet) {

        function computeHeight(feet, inch) {
            return sanitizeNumber(feet) * 12 + sanitizeNumber(inch);
        }

        return {
            species: 'Human',
            name: name,
            heightFeet: heightFeet,
            heightInch: heightInch,
            height: function() {
                return computeHeight(heightFeet, heightInch);
            },
            weight: weight,
            diet: diet
        }
    }
    // Use IIFE to get human data from form

    const btn = document.getElementById('btn');

    if (btn != null) {
        btn.addEventListener('click', (function() {
            return function() {
                const formData = new FormData(document.getElementById('dino-compare'));
                const h = {}
                for (const pair of formData.entries()) {
                    h[pair[0]] = pair[1];
                }
    
                const human = Human(h.name, h.feet, h.inches, h.weight, h.diet);
            };
        })());
            
    }

    function getImage() {
        d.table(this);
        const species = this.species;
        d.log(`species = ${species}`);
        const imageName = `${species.toLowerCase()}.png`;
        const imagePath = `image/${imageName}`;
        return imagePath;
    }
   
    function getRandomFacts(numberOfFacts = 3) {
        const attributes = ['where', 'when', 'fact', 'height', 'weight', 'diet'];
        // Shuffle array
        const shuffled = attributes.sort(() => 0.5 - Math.random());

        // Get sub-array of first n elements after shuffled
        const selected = shuffled.slice(0, numberOfFacts);
        return selected;
    }

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
