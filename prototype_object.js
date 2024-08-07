let myName = "Madhuri    ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`This is Length ${this.trim().length}`);
}
myName.trueLength();
"Bhushan  Tiger".trueLength();