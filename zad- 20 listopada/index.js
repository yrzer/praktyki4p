// Zadanie 9. (1pkt)
// Stwórz obiekt klasy Promise -> niech zakończy się powodzeniem (resolve) po 5 sekundach i zwróci string 'Udało się!'. 
// Jako callback (wywołanie w konsoli) niech wypisze zwrócony string w konsoli.

const test_Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('Udało się!');
        }
    }, 5000); // 5s
});

test_Promise.then((result) => {
    console.log(result);
});

// Zadanie 10. (2pkt)
// Napisz funkcję multiplyAsync(x,y), która zwraca obiekt klasy Promise, kończący się porażką, gdy któryś za argumentów jest niepoprawny (nie jest liczbą). W przeciwnym przypadku zwraca iloczyn dwóch liczb. Napisz callback (wywołanie w konsoli), który wypisuje wynik w konsoli.

const multiplyAsync = (x, y) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (!isNaN(parseInt(x * y))) {
            resolve(x * y);
        } else {
            reject("error", NaN);
        }
    }, 500); // 0.5s
});

multiplyAsync(1, "2").then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
});

// Zadanie 11. (2pkt)
// Wykonaj funkcję get dla następującego url: https://jsonplaceholder.typicode.com/posts
// Jako pierwszy callback (wywołanie w konsoli) - sprawdź czy response jest poprawny (status równy 200). Jeśli tak, to zwróć response, w przeciwnym wypadku wypisz błąd w konsoli.
// Jako następny callback (wywołanie w konsoli) - użyj destrukturyzacji obiektów, aby wypisać w konsoli zmienną 'title' i 'body' każdego z postów.

const get = (url) => {
    return fetch(url).then(response => {
        console.log(response);
        if (response.status != 200) { // !response.ok
            throw new Error('error: ${response.status}');
        } else if (response.status == 200) return response.json();
        else return "XD";
    });
}

get("https://jsonplaceholder.typicode.com/posts").then((result) => {
    // const [{ title, body }] = result;
    result.forEach(({
        title,
        body
    }) => { console.log(`title: ${title} body: ${body}`);
    });

}).catch((error) => {
    console.error(error);
});;