
    const d = (function () {
        const debug = false;
    
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
    const dinosFactory = Dinos();
    const dinos = dinosFactory.getDinos();

    // Create Human Object

    function sanitizeNumber(a_string) {
        try {
            return parseInt(a_string);
        } catch (e) {
        
        }
        return parseInt(string);
    }

    function addDict(d, key, item) {
        const i = d[key];
        if (i == undefined) {
            d[key] = [item];
        } else {
            i.push(item);
        }
    }

    function compareToDinos(human, dinos, compares) {
        results = {}
        for (const compare of compares) {
            for (const dino of dinos) {
                const result = compare(human, dino);
                addDict(results, result, dino);
            }
        }
        return results;
    }

    function Human(name, heightFeet, heightInch, weight, diet) {
        this.name = name,
        this.species = 'Human';
        this.name = name;
        this.heightFeet = heightFeet;
        this.heightInch = heightInch;
        this.height = sanitizeNumber(this.heightFeet) * 12 + sanitizeNumber(this.heightInch);
        this.weight = weight;
        this.diet = diet.toLowerCase();
    }
    // Use IIFE to get human data from form

    function getResultMessage(compareResults) {
        const messages = ['Compared to you,'];
        const keys = Object.keys(compareResults);
        
        for (const key of keys) {
            const items = compareResults[key];
            const dinoString = items.length > 1 ? 'dinosaurs' : 'dinosaur';
            const message = `${items.length} ${dinoString}: ${key}`;
            messages.push(message);
        }
        return messages;
    }

    function displayResults(compareResults) {
        const grid = getGrid();
        const resultMessage = getResultMessage(compareResults);
        const div = document.createElement('div');
        for (const message of resultMessage) {
            const text = document.createTextNode(message);
            const lineBreak = document.createElement('br');
            div.appendChild(text);
            div.appendChild(lineBreak);
        }
        div.style.backgroundColor = '#fff';
        grid.before(div);
    }

    function getGrid() {
        return document.getElementById('grid');
    }


    function displayDinos(human, dinos) {
        const grid = getGrid();
        const displayDinos = dinos;
        displayDinos.splice(4, 0, human);

        for (const dino of displayDinos) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            const img = document.createElement('img');
            const imagePath = getImage.call(dino);
            const fact = getRandomFacts()[0];
            d.log(`getting ${fact} information for ${dino.species}`);
            const factString = getFact.call(dino, fact);
            img.src = imagePath;
            div.appendChild(img);
            const label = getLabel.call(dino);
            const labelElement = document.createTextNode(label);
            div.appendChild(labelElement);
            const factText = document.createTextNode(factString);
            const br = document.createElement('br');
            div.appendChild(br);
            div.appendChild(factText);
            grid.appendChild(div);
        }

    }

    const btn = document.getElementById('btn');

    if (btn != null) {
        btn.addEventListener('click', (function() {
            return function() {
                const formData = new FormData(document.getElementById('dino-compare'));
                const h = {}
                for (const pair of formData.entries()) {
                    h[pair[0]] = pair[1];
                }
    
                const human = new Human(h.name, h.feet, h.inches, h.weight, h.diet);
                const compares = [compareDiet, compareHeight, compareWeight];
                const compareResults = compareToDinos(human, dinos, compares);
                displayDinos(human, dinos);
                displayResults(compareResults);
                const form = document.getElementById('dino-compare');
                form.style.display = 'none';
            };
        })());
            
    }

    function getLabel() {
        switch (this.species) {
            case 'Human':
                return this.name;
            default:
                return this.species;
        }
    }

    function getFact(fact) {
        if (this.species == 'Pigeon') {
            return this.fact;
        } else if (this.species == 'Human') {
            return '';
        } else {
            d.log(`getFact [${fact}]`);
            switch (fact) {
                case 'height':
                    d.log(`switch ${fact}`);
                    return `${this[fact]} inches`;
                case 'weight':
                    d.log(`switch ${fact}`);
                    return `${this[fact]} lbs`;
                default:
                    d.log(`switch ${fact}`);
                    return this[fact];
            }
        }
    }

    function getImage() {
        d.table(this);
        const species = this.species;
        d.log(`species = ${species}`);
        const imageName = `${species.toLowerCase()}.png`;
        const imagePath = `images/${imageName}`;
        return imagePath;
    }
   
    function getRandomFacts(numberOfFacts = 1) {
        const attributes = ['where', 'when', 'fact', 'height', 'weight', 'diet'];
        // Shuffle array
        const shuffled = attributes.sort(() => 0.5 - Math.random());

        // Get sub-array of first n elements after shuffled
        const selected = shuffled.slice(0, numberOfFacts);
        return selected;
    }

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    function compareWeight(human, dino) {
        if (dino.weight > human.weight) {
            return 'heavier';
        } else if (dino.weight < human.weight) {
            return 'lighter';
        } else {
            return 'same weight';
        }
    }
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareHeight(human, dino) {
        if (dino.height > human.height) {
            return 'taller';
        } else if (dino.height < human.height) {
            return 'shorter';
        } else {
            return 'same height';
        }
    }

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareDiet(human, dino) {
        if (dino.diet == human.diet) {
            return 'same diet';
        } 
        return 'different diet';
    }

    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
