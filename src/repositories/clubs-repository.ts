import { type IClubModel} from "../models/club-model"
import fs from "fs/promises"

const filePath = "./src/data/clubs.json"

export const findAllClubs = async (): Promise<IClubModel[]> => {
    const data = await fs.readFile(filePath, "utf-8")
    const clubs: IClubModel[] = JSON.parse(data)
    return clubs
}

export const filterClubsbyId = async (id: number): Promise<IClubModel | undefined> => {
    const data = await fs.readFile(filePath, "utf-8")
    const clubs: IClubModel[] = JSON.parse(data)
    return clubs.find((club) => club.id === id)
}

export const insertClub = async (club: IClubModel) => {
    const data = await fs.readFile(filePath, "utf-8")
    const clubs: IClubModel[] = JSON.parse(data)
    clubs.push(club)
    await fs.writeFile(filePath, JSON.stringify(clubs, null, 2), "utf-8")
}

export const deleteOneClub = async(id: number) =>{
    const data = await fs.readFile(filePath, "utf-8")
    const clubs: IClubModel[] = JSON.parse(data)
    const index = clubs.findIndex(club => club.id === id)
    if(index !== -1){
       clubs.splice(index, 1)
       await fs.writeFile(filePath, JSON.stringify(clubs, null, 2), "utf-8")
       return true
    }

    return false
}

