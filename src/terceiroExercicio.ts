/*
    3. Manipular Vários Dados
        - Faça uma requisição `GET` para `https://jsonplaceholder.typicode.com/posts`.
        - Filtre e imprima no console apenas os posts cujo `userId` seja 1.
*/

import axios from "axios";

async function buscarPosts() {

    try {

        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        
        if (response.status === 200) {

            const postsRecebidos = response.data;

            for (var post of postsRecebidos) { // Poderia fazer um for aqui tanto com "postsRecebidos" como também "response.data"
                if (post.userId === 1){
                    console.log(post)
                }
            }

        }

    } catch (error) {
        console.error(error)
    }

}

export default buscarPosts;