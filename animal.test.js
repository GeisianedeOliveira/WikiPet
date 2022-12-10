const { animalMethods } = require ("./animal")

const Kika = {
    type: "Cachorro", 
    name: "Kika", 
    age: 2, 
    color: "Branco",
    amountOfStain: 6,
    stainColors: "Marron",
    positionOfTheStains: "Dorso, Rosto e Rabo",
    eyeColor: "Pretos"
};

describe("Testes - Animal", () =>{
    
describe("Cadastrar pet - Caminho feliz",() => {
    const cadastro = animalMethods.createdAnimal(
        Kika.type,
        Kika.name,
        Kika.age,
        Kika.color,
        Kika.amountOfStain,
        Kika.stainColors,
        Kika.positionOfTheStains,
        Kika.eyeColor
    )
    test("Verificando método de cadastro de pet - Caminho feliz", () => {
        expect(cadastro).toBe("Animal cadastrado com sucesso!");
    })
});

describe("Cadastrar pet - Caminho infeliz",() => {
    const cadastro = animalMethods.createdAnimal(
        Kika.type,
        Kika.name,
        Kika.age,
        Kika.color,
        Kika.amountOfStain,
        Kika.stainColors,
        Kika.positionOfTheStains
    )
    test("Verificando método de cadastro de pet - Caminho infeliz", () => {
        expect(cadastro).toBe("Informação incompletas, preencha todas as informação do seu pet.");
    })
});

describe("Busca pet - Caminho feliz.", () => {
    const busca = animalMethods.foundAnimal(
        Kika.type,
        Kika.color,
        Kika.stainColors
    )
    test("Verificando método de busca de pet - Caminho feliz.", () => {
        expect(busca).toBe("Temos um pet com as mesmas características que os seus.")
    })
})

describe("Busca pet - Caminho infeliz.", () => {
    const busca = animalMethods.foundAnimal(
        Kika.type != Kika.type,
        Kika.color != Kika.color,
        Kika.stainColors != Kika.stainColors
    )
    test("Verificando método de busca de pet - Caminho infeliz.", () => {
        expect(busca).toBe("Não encontramos nenhum pet com as mesmas características que os seus, sentimos muito! :/")
    })
})
})
