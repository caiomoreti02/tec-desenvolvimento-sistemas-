import { v4 } from "uuid"
import { db } from "../database/connection.js"

export async function getAllEquip() {
    const [ equips ] = await db.query("SELECT * FROM equipamentos")

    return equips
}

export async function getEquipById(id) {
    const [ equips ] = await db.query("SELECT * FROM equipamentos WHERE id = ?", [id])
    
    return equips
}

export async function postEquip(body) {
    const { nome, categoria, numeroDeSerie, status,  } = body

    const equips = await db.query("INSERT INTO equipamentos (id, nome, categoria, numeroDeSerie, status, dataDeAquisicao) VALUES (?, ?, ?, ?, ?, ?)", [v4(), nome, categoria, numeroDeSerie, status, new Date()])
    
    return equips
}

export async function deleteEquipService(id) {
    await db.query(
        "DELETE FROM equipamentos WHERE id = ?",
        [id]
    )

    return "Equip deleted!"
}

export async function putEquipService(id, body) {
    const { nome, categoria, numeroDeSerie, status } = body
    
    if(index === -1) {
        response.code(404).send({ message: "Equip not found!" })
    }

    await db.query(
        `UPDATE equipamentos
        SET nome = ?, categoria = ?, numeroDeSerie = ?, status = ?
        WHERE id = ?`,
        [nome, categoria, numeroDeSerie, status, id]
    )

    return "Equip updated!"
}

export async function patchEquipService(id, body) {
    const equip = await getEquipById(id)

    if (!equip) {
        return false
    }

    const updatedEquip = {
        ...equip,
        ...body
    }

    const { nome, categoria, numeroDeSerie, status } = updatedEquip

    await db.query(
        `UPDATE equipamentos
        SET nome = ?, categoria = ?, numeroDeSerie = ?, status = ?
        WHERE id = ?`,
        [nome, categoria, numeroDeSerie, status, id]
    )

    return "Equip updated!"
}