import { type Request, type Response} from "express"
import * as PlayerService from "../services/players-service";
import { badRequest, noContent } from "../utils/http-helper";
import type { IStatsModel } from "../models/statistics-model";


export const getPlayer = async (req: Request, res: Response) => {
        const HttpResponse = await PlayerService.getPlayerService()
        res.status(HttpResponse.statusCode).json(HttpResponse.body)
    };

export const getPlayerById = async(req: Request, res: Response) => {
    if(req.params.id){
        const id = parseInt(req.params.id)
        const HttpResponse = await PlayerService.getPlayerByIdService(id)
        res.status(HttpResponse.statusCode).json(HttpResponse.body)
    } else {
    const response = await badRequest()
    res.status(response.statusCode).json({ error: 'Player ID is required.' });
  }
}

export const postPlayer = async(req: Request, res: Response) => {
    const bodyValue = req.body
    const HttpResponse = await PlayerService.createPlayerService(bodyValue)
    if(HttpResponse){
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
    } else{
    const response = await noContent();
     res.status(response.statusCode).json(response.body)
    }

}

export const deletePlayer = async(req: Request, res: Response) => {

if(req.params.id){
    const id = parseInt(req.params.id)
    const HttpResponse = await PlayerService.deletePlayerService(id)
     res.status(HttpResponse.statusCode).json(HttpResponse.body);
}else{
    const response = await badRequest()
     res.status(response.statusCode).json({ error: 'Player ID is required.' })
    }
}

export const updatePlayer = async(req: Request, res: Response) =>{
    if(req.params.id){
        const id = parseInt(req.params.id)
        const bodyValue: IStatsModel = req.body
        const HttpResponse = await PlayerService.updatePlayerService(id, bodyValue)
        res.status(HttpResponse.statusCode).json(HttpResponse.body);
    } else{
        const response = await noContent()
        res.status(response.statusCode).json({ error: 'Player ID is required.' })
    }
}