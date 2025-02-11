/*  
    2. Enviar Dados com POST
        Crie uma função que:
            - Dispare uma requisição `POST` para `https://jsonplaceholder.typicode.com/posts`.
            - Envie no corpo da requisição um objeto com `title`, `body`, e `userId`.
            - Exiba o ID gerado pela API.
*/

    import axios from "axios";

    async function criarPost(title: string, body : string, userID : number) {
        
        try {
            
            const request = await axios.post("https://jsonplaceholder.typicode.com/posts", 
                {
                    "title" : `${title}`,
                    "body" : `${body}`,
                    "userID" : `${userID}`
                }
            )

            if (request.status === 201) {
                console.log("Registo inserido com sucesso!")
            }

            console.log(`Id gerado pela API: ${request.data.id}`)
            
        } 
        catch (error) {
            console.error(error)
        }

    }

    export default criarPost;