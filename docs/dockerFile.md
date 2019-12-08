/**Para que e ?**/

Docker pode construir imagens automaticamente lendo as instruções do arquivo Dockerfile. O
Dockerfile é um arquivo de texto que contém todos os comandos necessários para se criar uma
imagem, usando o comando docker build podemos então criar a imagem a partir do Dockerfile.
Formato

INSTRUCAO argumentos
A instrução não faz distinção entre maiúsculas e minúsculas. Porém a convenção diz para as
instruções serem MAIÚSCULAS para distinguir dos argumentos mais facilmente.

O Docker executa as instruções do Dockerfile em ordem. A primeira instrução deve ser “FROM” para
especificar a Imagem Base da qual você está construindo no formato pedido.

/**Exemplo de arquivo dockfile**/

    FROM node:alpine
    WORKDIR /usr/app
    COPY package*.json ./
    RUN npm install
    COPY . .
    EXPOSE 3000
    CMD ["npm","start"]
