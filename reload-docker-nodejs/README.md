# Exemplo para recarga ao vivo usando Node.js e Docker

- Após instalar o Docker e o Docker Compose, você executaria `docker-compose up --build`
- Acessando `localhost: 8080`, você encontrará uma página com uma imagem estática

- Ao `. / Index.ts`, você altera o nome da imagem e vê a alteração no navegador

- Este projeto mostrará como usar as funções de recarga ao vivo usando um processo de compilação como exemplo. Ele usa o Typecript e, após cada alteração, o Typecript deve ser reconstruído e o nodemon deve ser recarregado para aplicar as alterações. Tudo isso acontece usando apenas um comando como `docker-compose up`.

> Codigo baseado no de Erick Wendel 