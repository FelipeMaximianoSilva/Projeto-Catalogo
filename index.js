// Importando o módulo o express
import express from "express";

// Importando o path, que serve para informar caminhos para o EJS
import path from "path";

// Importando as rotas
import { routes } from './src/routes/routes.js'

// Informa a pasta raiz
const __dirname = path.resolve(path.dirname(""));

// Criar uma variável e instanciar (ou seja: passar todos as funções da função express para o variável app)
const app = express();

// Serve para que a informação que vem do body da requisição - ou seja, informação que usário nos envia - vire JSON
app.use(express.json());

// Serve para 'parsear' - ou seja, transformar em JSON - a requisição do usário
app.use(express.urlencoded({ extended: true }));

// Informa para o meu express que o motor de visualização (ou seja, o modo que vai exibir as minhas páginas) vai ser o EJS
app.set("view engine", "ejs");

// Informa onde estão os arquivos estáticos (que são todos os arquivos complementares do HMTL/EJS - EX: CSS, JS, IMG e etc)
app.use(express.static(path.join(__dirname, "public")));

// Instruindo o app a usar as rotas da pasta SRC
app.use(routes)

// Variável porta = indica qual porta o nosso servidor vai rodar /  (3000 - 4999)
const port = 3001;

app.listen(port, () => {
  console.log(`Estou rodando dentro da port ${port}`);
});