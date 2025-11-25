import express from 'express';
import type { Request, Response } from 'express';
import 'dotenv/config';

export const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(
      `Server running at http://localhost:${port} in ${process.env.NODE_ENV} mode`
    );
  });
}
