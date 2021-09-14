# typescript01
Primeiro projeto de teste TypeScript MVC com MongoDB </br>
*TypeScript </br>
*NestJS </br>
*MongoDB 
</br></br>
<h4>Como rodar:</h4>
npm run start

<h5>Pre Requisitos</h5>
*MongoDB instlado </br>
*Node.js  </br>

<h5>Como rodar</h5>
*baixe o fonte </br>
*Abra no vscode </br>
*Navege até a pasta e use o comando: </br>
npm run start
</br>
*Dai pode testar no postman
</br></br>
Segue os curl para endpoints:</br>
[POST]</br>
curl --location --request POST 'http://localhost:3000/produtos/novo' \
--header 'Content-Type: application/json' \
--data-raw '{
    "nome":"teste",
    "preco":10
}'
</br>
[GET]</br>
curl --location --request GET 'http://localhost:3000/produtos/todos'
</br>
[GET by id]</br>
curl --location --request GET 'http://localhost:3000/produtos/produto/613b938018359f33a406df32'
</br>
[PUT]</br>
curl --location --request PUT 'http://localhost:3000/produtos/produto' \
--header 'Content-Type: application/json' \
--data-raw '{
    "_id": "613b938018359f33a406df32",
    "nome":"bla bla",
    "preco":11
}'
</br>
[DELETE]</br>
curl --location --request DELETE 'http://localhost:3000/produtos/produto/613b9834106f501ae0974918'
</br>
Rodar os testes: </br>
npm run test     </br>
