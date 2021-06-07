
    const d = (function () {
        const debug = true;
    
        function log(message) {
            if (debug) {
                console.log(message)
            }
        }

        function group(groupName = 'default') {
            console.group(groupName);
        }

        function groupEnd() {
            console.groupEnd();
        }
    
        return {
            log: log,
            group: group,
            groupEnd: groupEnd
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
            }
        }

    }

    // Create Dino Objects

    function getDinos(speciesArray) {
        const result = dinos.getDinos();
    }


    // Create Human Object

    // Use IIFE to get human data from form


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

// test
const dinos = Dinos()
d.group();
d.log(dinos.getSpeciesList());

