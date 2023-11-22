const mojeF_api = (id) => (element) => {
    id = parseInt(id);
    return fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(response => response.json())
        .then(json => {
            let w ="id = " + json.id + "<br>tytuł = "+ json.title+"<br> text"+json.body;
            document.getElementById(element).innerHTML = w;
            // zapis(json.userId,json.id,json.title,json.body);
        });
}
let id = 0;
// var on_post = {};
const a = (cos)=>{
    if(id+cos >0 && id+cos <=100){
    mojeF_api(id+cos)("wynik");
    id+=cos;}
}

// function zapis(userId,id,title,body){
//     on_post = {
//         "userId": userId,
//         "id": id,
//         "title": title,
//         "body": body
//     }
//     // console.log(on_post.title)
// }
// function a(cos){
//     if(id+cos >0 && id+cos <=100){
//         id+=cos;
//         mojeF_api(id,"wynik");
//     }
//     document.getElementById("wynik").innerHTML = "id = " + on_post.id + "<br>tytuł = "+ on_post.title+"<br> text"+on_post.body;
// }

// const curryExample = () => () => {}
// curryExample()('posts')