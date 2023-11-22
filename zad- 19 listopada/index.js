const books = [
    {title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 7},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 4},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 2},
    {title: 'Tenth Joy', pages: 32, genre: 'action', rating: 9},
    {title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 8},
    {title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 1},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 5},
];

// Zad6. (2 pkt)
// Stwórz kompozycję która na tablicy „books” zlicza ilość liter w tytule (title) nie licząc spacji,
// gdzie strony (pages) są parzyste oraz genre kończy się na literkę „y”. 
const compose = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x)

const strParzyste = (list) =>  list.filter( (book) => book.pages % 2 == 0);
const generY = (list) =>  list.filter( (book) => book.genre[book.genre.length - 1] == 'y');
const bez_spacja = (list) => list.map( (book) => book.title.replace(/\s/g,'') ); // zwraca tylko title ???
const litery_liczba = (list) => list.map( (book) => book.length);

// const zad6_compose = compose(litery_liczba, bez_spacja, generY, strParzyste);
const zad6_compose = compose(strParzyste,generY,bez_spacja,litery_liczba);
console.log(zad6_compose(books));


// Zad7. (2 pkt)
// Stwórz kompozycję która na tablicy „books” zlicza ilość pozytywnych ocen (rating > 5), gdzie
// strony (pages) są liczbą nieparzystą oraz tytuł (title) zawiera liczbę.

const strNieParzyste = (list) =>  list.filter( (book) => book.pages % 2 != 0);
const rating_pozytywne = (list) =>  list.filter( (book) => book.rating > 5);
const maLiczbe = (list) => list.filter( (book) => /\d/.test(book.title) );
const ile = (lista) => lista.length;
const zad7_compose = compose(strNieParzyste, rating_pozytywne, maLiczbe, ile);
console.log(zad7_compose(books));

// Zad8. (2 pkt)
// Stwórz kompozycję która na tablicy „books” zwraca drugi najdłuższy tytuł (title).

// const usun_mniejszy = (lista) => 
const s_po_d = (list) => list.sort((a, b) => a.title.length - b.title.length) 
const n_d_2 = (list) => list.reverse()[1].title;
const zad8_compose = compose(s_po_d,n_d_2);
console.log(zad8_compose(books));
