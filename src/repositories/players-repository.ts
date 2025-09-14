import path from "path";
import { type IPlayerModel } from "../models/player-model";
import type { IStatsModel } from "../models/statistics-model";
import fs from "fs/promises"

const filePath = "./src/data/players.json"


export const findAllPlayers = async (): Promise<IPlayerModel[]> =>{
        const data = await fs.readFile(filePath, "utf-8")
        const players: IPlayerModel[] = JSON.parse(data)
        return players
};

export const findPlayerbyId = async (id: number): Promise<IPlayerModel | undefined> =>{
        const data = await fs.readFile(filePath, "utf-8")
        const players: IPlayerModel[] = JSON.parse(data)
        return players.find((player) => player.id === id)
};

export const insertPlayer = async (player: IPlayerModel) => {
        const data = await fs.readFile(filePath, "utf-8")
        const players: IPlayerModel[] = JSON.parse(data)
        players.push(player)
        await fs.writeFile(filePath, JSON.stringify(players, null, 2), "utf-8");
};

export const deleteOnePlayer = async(id: number) =>{
  const data = await fs.readFile(filePath, "utf-8")
  const players: IPlayerModel[] = JSON.parse(data)
  const index = players.findIndex(player => player.id === id)
    if (index !== -1){
        players.splice(index, 1)
        await fs.writeFile(filePath, JSON.stringify(players, null, 2), "utf-8");
        return true
     }

     return false
};

export const findAndModifyPlayer = async (id: number, statistics: IStatsModel)  => {
  const data = await fs.readFile(filePath, "utf-8")
  const players: IPlayerModel[] = JSON.parse(data)
  const playerIndex = players.findIndex(player => player.id === id)
    if(playerIndex !== -1 && players[playerIndex]){
        players[playerIndex].statistics = statistics
        await fs.writeFile(filePath, JSON.stringify(players, null, 2), "utf-8");
      return players[playerIndex]
    }

}