import  { type Request, type Response} from "express"
import * as ClubService from "../services/clubs-service"
import { badRequest, noContent } from "../utils/http-helper";
import type { IClubModel } from "../models/club-model";

export const getClubs = async (req: Request, res: Response) => {
    const response = await ClubService.getClubService();
    res.status(response.statusCode).json(response.body)
}

export const getClubsbyId = async (req: Request, res:Response) => {
    if(req.params.id){
        const id = parseInt(req.params.id)
        const HttpResponse = await ClubService.getClubByIdService(id)
        res.status(HttpResponse.statusCode).json(HttpResponse.body)
    } else {
        const response = await badRequest()
        res.status(response.statusCode).json({error: "Club ID is required"})
    }
}

export const postClub = async(req: Request, res: Response) => {
    const bodyValue = req.body
    const HttpResponse = await ClubService.createClubService(bodyValue)
    if(HttpResponse){
        res.status(HttpResponse.statusCode).json(HttpResponse.body)
    } else {
        const response = await noContent()
        res.status(response.statusCode).json(response.body)
    }
}

export const deleteClub = async(req: Request, res: Response) => {
    if(req.params.id){
        const id = parseInt(req.params.id)
        const HttpResponse = await ClubService.deleteClubService(id)
        res.status(HttpResponse.statusCode).json(HttpResponse.body)
    } else {
        const response = await badRequest()
        res.status(response.statusCode).json({error: "Club ID is required"})
    }
}

