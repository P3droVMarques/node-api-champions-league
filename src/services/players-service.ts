import { response } from "express";
import type { IPlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository"
import * as HttpResponse from "../utils/http-helper"
import type { IStatsModel } from "../models/statistics-model";

export const getPlayerService = async () =>{
    const data = await PlayerRepository.findAllPlayers()
    let response = null

    if(data){
        response = await HttpResponse.ok(data)
    } else{
        response = await HttpResponse.noContent()
    }
    
    return response
};

export const getPlayerByIdService = async (id:number) =>{
    const data = await PlayerRepository.findPlayerbyId(id)
    let response = null

    if(data){
        response = await HttpResponse.ok(data)
    } else{
        response = await HttpResponse.noContent()
    }

    return response
}

export const createPlayerService = async (player:IPlayerModel) =>{
    let response = null

    if(Object.keys(player).length !== 0){
        await PlayerRepository.insertPlayer(player)
        response = await HttpResponse.created()
    } else{
        response = HttpResponse.badRequest()
    }

    return response
}

export const deletePlayerService = async (id: number) => {
    let response = null
    const deleted = await PlayerRepository.deleteOnePlayer(id)

    if(deleted){
        response = await HttpResponse.ok({message:"deleted"})
    } else{
        response = await HttpResponse.badRequest();
    }

    return response
}

export const updatePlayerService = async (id:number, statistics:IStatsModel) => {
const data = await PlayerRepository.findAndModifyPlayer(id, statistics);
  let response = null;

  if (!data || Object.keys(data).length === 0 ) {
    response = await HttpResponse.badRequest();
  } else {
    response = await HttpResponse.ok(data);
  }

  return response;

}