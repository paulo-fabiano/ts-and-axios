/*
    1. Disparar uma Requisição GET

        Faça uma função que:
        - Dispare uma requisição `GET` para o endpoint `https://jsonplaceholder.typicode.com/posts/1`.
        - Imprima o título do post no console.

    Extra:
        - Trate possíveis erros com `try-catch`.
*/

import axios from "axios";

async function disparoGet() {
    try {        
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        console.log(response.data)
    } catch (error) {
        console.error("Error: ", error)
    }
}

export default disparoGet;