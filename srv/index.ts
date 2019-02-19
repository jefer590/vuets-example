import { Application, Request, Response } from 'express'
import ApiMessage from '../model/ApiMessage';

export default (app: Application) => {
  app.get('/api/test', (req: Request, res: Response) => {
    const response: ApiMessage = {
      message: 'The Message from API Thanks to Interfaces'
    }

    res.json(response)
  })
}
