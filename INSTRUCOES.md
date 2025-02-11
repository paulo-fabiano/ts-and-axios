## **Configuração do Ambiente TypeScript**

1. **Iniciar o Projeto:**
   ```bash
   npm init -y
   ```

2. **Instalar o TypeScript:**
   ```bash
   npm install typescript --save-dev
   ```

3. **Inicializar o TypeScript:**
   ```bash
   npx tsc --init
   ```
   Isso gerará um arquivo `tsconfig.json`. Você pode ajustá-lo conforme suas necessidades.

4. **Criar o Arquivo de Entrada:**
   Crie um arquivo `index.ts` para escrever seu código TypeScript.

5. **Compilar o Código:**
   ```bash
   npx tsc
   ```
   Isso gerará um arquivo `index.js`.

6. **Executar o Código:**
   ```bash
   node index.js
   ```