import Group from "./group.js"
import Person from "./person.js"

//Here I created the persons that will conform the group later;
let Felipe = new Person ("Felipe López", 20);
let Carolina = new Person ("Carolina Natalie", 19);
let Joaquín = new Person ("Joaquín", 21);
let Valeria = new Person ("Valeria", 22);

//Here I created the group where all the 4 personas created before will attent;
let grupo = new Group ();

//Here I add each and evey person to the group;
grupo.add(Felipe);
grupo.add(Carolina);
grupo.add(Joaquín);
grupo.add(Valeria);

//Here I print the list of the persons by name and age;
console.log(grupo.list());