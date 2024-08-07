let myName = "Madhuri    ";

String.prototype.trueLength = function(){
    //String chya jagevr aapn oject pn gheu shakto..bcoz object parent aahe string ,array,function  cha
    console.log(`${this}`);
    console.log(`This is Length ${this.trim().length}`);
}
myName.trueLength();
"Bhushan  Tiger".trueLength();