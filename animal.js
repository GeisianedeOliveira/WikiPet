class Animal {
    type;
    name;
    age;
    color;
    amountOfStain;
    stainColors;
    positionOfTheStains;
    eyeColor;

    constructor(type,name,age,color,amountOfStain,stainColors,positionOfTheStains,eyeColor){
        this.type = type,
        this.name = name,
        this.age = age,
        this.color = color,
        this.amountOfStain = amountOfStain,
        this.stainColors = stainColors,
        this.positionOfTheStains = positionOfTheStains,
        this.eyeColor = eyeColor
    }

};

const animalMethods = {

    createdAnimal(type,name,age,color,amountOfStain,stainColors,positionOfTheStains,eyeColor){
        if(
            this.type = type,
            this.name = name,
            this.age = age,
            this.color = color,
            this.amountOfStain = amountOfStain,
            this.stainColors = stainColors,
            this.positionOfTheStains = positionOfTheStains,
            this.eyeColor = eyeColor){
                return "Animal cadastrado com sucesso!"
        } else{
                return "Informação incompletas, preencha todas as informação do seu pet."
        }
    },

    foundAnimal(type,color,stainColors){
        if(
        this.type === type &&
        this.color === color &&
        this.stainColors === stainColors
        ){
            return "Temos um pet com as mesmas características que os seus."
        } else {
            return "Não encontramos nenhum pet com as mesmas características que os seus, sentimos muito! :/"
        }
    }
};


console.log(animalMethods.createdAnimal("Cachorro", "Kika", 2, "Branco", 6, "Marron", "Dorso, Rosto e Rabo", "Pretos"))

console.log(animalMethods.foundAnimal("Cachorro","Branco","Marron"))

module.exports = {
    animalMethods
}


