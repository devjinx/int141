//c10_exercise.js

/*
1. write an object with a class definition (Computer) with properties: memory, SSD
and a method named upgrade with 2 parameters: property and value
(e.g., upgrade('memory',32)) that will upgrade respective existing property.
*/
// c10_exercise.js

function defaultComputer(){
    class Computer {
        static totalMemory = 0;

        constructor(memory, ssd) {
            this.memory = memory;
            this.ssd = ssd;
            Computer.totalMemory += memory;
        }

        upgrade(property, value) {
            if (property.toLowerCase() === 'memory') {
                // Update totalMemory before changing the memory
                Computer.totalMemory -= this.memory;
                this.memory = value;
                Computer.totalMemory += value;
            } else if (property.toLowerCase() === 'ssd') {
                this.ssd = value;
            } else {
                console.log("Error: Property not recognized.");
            }
        }

        static getTotalMemory() {
            return Computer.totalMemory;
        }
    }
    let myComputer = new Computer(16, 512);
    console.log("Before Upgrade:", myComputer.memory, myComputer.ssd);

    myComputer.upgrade("memory", 32);
    myComputer.upgrade("ssd", 1024);

    console.log("After Upgrade:", myComputer.memory, myComputer.ssd);
    console.log("Total Memory:", myComputer.constructor.getTotalMemory());

    myComputer.upgrade("ram", 64); // Invalid property
    console.log("Final Memory:", myComputer.memory, myComputer.ssd);
    console.log("Total Memory:", myComputer.constructor.getTotalMemory());
}

/*
2. add static property named totalMemory to the class definition and 
and static method named getTotalMemory.  This static totalMemory will sum 
the memory of all computer and update everytime that the memory is updated.
*/
function totalMemory(){
    class Computer {
        static totalMemory = 0; // Static property to track total memory
    
        constructor(memory, ssd) {
            this.memory = memory;
            this.ssd = ssd;
            Computer.totalMemory += memory; // Add to total when a new computer is created
        }
    
        upgrade(property, value) {
            if (property.toLowerCase() === 'memory') {
                // Adjust total memory before and after upgrade
                Computer.totalMemory -= this.memory;
                this.memory = value;
                Computer.totalMemory += value;
            } else if (property.toLowerCase() === 'ssd') {
                this.ssd = value;
            } else {
                console.log("Error: Property not recognized.");
            }
        }
    
        static getTotalMemory() {
            return Computer.totalMemory;
        }
    }
    
    // Example usage
    const pc1 = new Computer(16, 512);
    const pc2 = new Computer(8, 256);
    
    console.log("Total Memory after creation:", Computer.getTotalMemory()); // 24
    
    pc1.upgrade("memory", 32);
    
    console.log("Total Memory after upgrade:", Computer.getTotalMemory()); // 40
    
}

defaultComputer()
totalMemory()