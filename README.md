# TypeScript API Requests Exercises

Aqui estão alguns exercícios para você treinar a manipulação de requisições com TypeScript.

## **1. Disparar uma Requisição GET**
Faça uma função que:
- Dispare uma requisição `GET` para o endpoint `https://jsonplaceholder.typicode.com/posts/1`.
- Imprima o título do post no console.

### **Extra:**
- Trate possíveis erros com `try-catch`.

---

## **2. Enviar Dados com POST**
Crie uma função que:
- Dispare uma requisição `POST` para `https://jsonplaceholder.typicode.com/posts`.
- Envie no corpo da requisição um objeto com `title`, `body`, e `userId`.
- Exiba o ID gerado pela API.

---

## **3. Manipular Vários Dados**
- Faça uma requisição `GET` para `https://jsonplaceholder.typicode.com/posts`.
- Filtre e imprima no console apenas os posts cujo `userId` seja 1.

---

## **4. Consumir uma API e Exibir em HTML**
- Crie uma pequena aplicação com HTML que:
  - Tenha um botão "Buscar Dados".
  - Dispare uma requisição `GET` para `https://jsonplaceholder.typicode.com/comments`.
  - Renderize na tela os primeiros 5 comentários.

---

## **5. Tratamento de Erros**
- Crie uma função que tenta disparar uma requisição para um endpoint inválido.
- Capture o erro e exiba uma mensagem amigável no console.

---

## **6. Requisição Paralela com `Promise.all`**
- Dispare duas requisições ao mesmo tempo:
  - Uma para `https://jsonplaceholder.typicode.com/posts/1`
  - Outra para `https://jsonplaceholder.typicode.com/users/1`
- Aguarde ambas e exiba no console o título do post e o nome do usuário.

---

## **7. Criar uma Função Genérica de Fetch**
- Crie uma função genérica `fetchData<T>(url: string): Promise<T>` que possa ser usada para fazer requisições a qualquer endpoint e tipar a resposta.
