import * as HttpResponse from "../utils/http-helper"
import * as ClubRepository from "../repositories/clubs-repository"
import type { IClubModel } from "../models/club-model";
import type { IStatsModel } from "../models/statistics-model";

export const getClubService = async () =>{
    const data = await ClubRepository.findAllClubs();
        let response = null
    
        if(data){
            response = await HttpResponse.ok(data)
        } else{
            response = await HttpResponse.noContent()
        }
        
        return response
}

export const getClubByIdService = async (id: number) =>{
    const data = await ClubRepository.filterClubsbyId(id)
    let response = null

    if(data){
        response = await HttpResponse.ok(data)
    } else {
        response = await HttpResponse.noContent()
    }

    return response
}

export const createClubService = async (club: IClubModel) =>{
    let response = null

    if(Object.keys(club).length !== 0){
        await ClubRepository.insertClub(club)
        response = await HttpResponse.created()
    } else{
        response = HttpResponse.badRequest()
    }

    return response
}

export const deleteClubService = async (id: number)=>{
    let response = null
    const deleted = await ClubRepository.deleteOneClub(id)

    if(deleted){
        response = await HttpResponse.ok({message:"deleted"})
    } else{
        response = await HttpResponse.badRequest()
    }

    return response
}




