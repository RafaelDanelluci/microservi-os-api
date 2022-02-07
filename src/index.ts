import Express from 'express';
import statusRoute from './routes/status.router';
import usersRoute from './routes/users.route';

const app = Express();

//config de aplicaçao
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

//config de rotas
app.use(statusRoute);
app.use(usersRoute);

//Inicializaçao do servidor
app.listen(3000, () => {
  console.log('app executando na porta 3000');
});