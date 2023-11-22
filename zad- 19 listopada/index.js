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

const zad6 = (tab) => { // tablica
    const r = tab.map((l) => { // line
        if (l.pages % 2 == 0 && l.genre[l.genre.length - 1] == "y") {
            let sum = 0;
            for (x = 0; x < l.title.length; x++)
                if (l.title[x] != " ") sum++;
            return sum;
        } else return null;
    });
    return r.reduce((a, x) => a + x);
};
console.log(zad6(books));
// Zad7. (2 pkt)
// Stwórz kompozycję która na tablicy „books” zlicza ilość pozytywnych ocen (rating > 5), gdzie
// strony (pages) są liczbą nieparzystą oraz tytuł (title) zawiera liczbę.

const zad7 = (tab) => {
    let sum = 0;
    tab.map((l) => { // line
        if (l.pages % 2 != 0 && l.rating > 5) {
            let t = false;
            for (x = 0; x < l.title.length; x++) {
                if (!isNaN(parseInt(l.title[x]))) t = true;
            }
            if (t) sum++;
        };
    });
    return sum;
}
console.log(zad7(books));
// Zad8. (2 pkt)
// Stwórz kompozycję która na tablicy „books” zwraca drugi najdłuższy tytuł (title).

const zad8 = (tab) => {
    let n1 = "";
    let n2 = "";
    tab.map((l) => { // line
        x = l.title; y = x.length;
        if (n1.length < y) n1 = x;
        else if (n2.length < y) n2 = x;
    });
    return n2;
}
console.log(zad8(books));