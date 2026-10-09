// Lista de animais disponíveis para adoção.
// `breedKey` é usado para obter imagens da Dog CEO API (cães) ou The Cat API (gatos).
export const animals = [
  { id: 1, name: 'Bolinha', type: 'Cão', breed: 'Labrador', breedKey: 'labrador', age: '2 anos', sex: 'Macho', location: 'Lisboa', description: 'Brincalhão e muito meigo, adora correr na praia e brincar com bolas.' },
  { id: 2, name: 'Luna', type: 'Cão', breed: 'Pastor Alemão', breedKey: 'germanshepherd', age: '4 anos', sex: 'Fêmea', location: 'Porto', description: 'Leal e protetora, ideal para uma família com quintal.' },
  { id: 3, name: 'Max', type: 'Cão', breed: 'Beagle', breedKey: 'beagle', age: '1 ano', sex: 'Macho', location: 'Coimbra', description: 'Curioso e cheio de energia, adora passeios longos.' },
  { id: 4, name: 'Mel', type: 'Cão', breed: 'Golden Retriever', breedKey: 'retriever/golden', age: '3 anos', sex: 'Fêmea', location: 'Lisboa', description: 'Dócil e paciente, ótima com crianças.' },
  { id: 5, name: 'Thor', type: 'Cão', breed: 'Husky', breedKey: 'husky', age: '5 anos', sex: 'Macho', location: 'Braga', description: 'Independente e aventureiro, precisa de muito exercício.' },
  { id: 6, name: 'Pipoca', type: 'Cão', breed: 'Pug', breedKey: 'pug', age: '6 anos', sex: 'Fêmea', location: 'Faro', description: 'Calma e carinhosa, perfeita para apartamento.' },
  { id: 7, name: 'Rex', type: 'Cão', breed: 'Boxer', breedKey: 'boxer', age: '2 anos', sex: 'Macho', location: 'Porto', description: 'Divertido e sociável, dá-se bem com outros cães.' },
  { id: 8, name: 'Nina', type: 'Gato', breed: 'Siamês', breedKey: 'siam', age: '1 ano', sex: 'Fêmea', location: 'Lisboa', description: 'Muito conversadora e afetuosa, gosta de colo.' },
  { id: 9, name: 'Simba', type: 'Gato', breed: 'Maine Coon', breedKey: 'mcoo', age: '3 anos', sex: 'Macho', location: 'Coimbra', description: 'Um gigante gentil, tranquilo e sociável.' },
  { id: 10, name: 'Mia', type: 'Gato', breed: 'Persa', breedKey: 'pers', age: '7 anos', sex: 'Fêmea', location: 'Braga', description: 'Serena e elegante, adora dormir ao sol.' },
  { id: 11, name: 'Tigre', type: 'Gato', breed: 'Bengal', breedKey: 'beng', age: '2 anos', sex: 'Macho', location: 'Faro', description: 'Ativo e brincalhão, adora trepar e explorar.' },
  { id: 12, name: 'Kiki', type: 'Gato', breed: 'Azul Russo', breedKey: 'rblu', age: '4 anos', sex: 'Fêmea', location: 'Porto', description: 'Tímida no início, mas muito leal depois de ganhar confiança.' },
]

export const getAnimal = (id) => animals.find((a) => a.id === Number(id))

export const unique = (key) => [...new Set(animals.map((a) => a[key]))].sort()
