const people = [
    {
        name: 'Anthony',
        id: 1,
        image: 'https://www.lukiegames.com/assets/images/GBC/GBC_SYSTEM_TEAL.jpg',
        description: 'Bad at video games'
    },
    {
        name: 'Sam',
        id: 2,
        image: 'http://img.hexus.net/v2/news/beast/aphros-reality-1.jpg',
        description: 'Good at video games'
    },
    {
        name: 'Chogen',
        id: 3,
        image: 'https://www.techdotmatrix.com/wp-content/uploads/2016/10/Programming-languages.jpg',
        description: 'Good at programming'
    }
]

export function getPeople() {
    return people;
}

export function getPerson(id) {
    //for loop
    //.map
    //.filter
    //for each
    let person = people.filter(element => {
        if(element.id === +id) {
            return element;
        }
    })
    return person[0];
}