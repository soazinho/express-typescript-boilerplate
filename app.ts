import express, { Application, NextFunction, Request, Response }  from "express";

const app: Application = express();
const port: number = 3000;

app.use('/', (req: Request, res: Response, next: NextFunction): void => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`Server running at port ${port}.`);
});