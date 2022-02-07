import Express, { Request, Response, NextFunction } from 'express';
import usersRoute from './routes/users.route';

const app = Express();

app.use(usersRoute);

app.get('/status',(req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ foo: 'Sucesso!' });
});

app.listen(3000, () => {
  console.log('app executando na porta 3000');
});