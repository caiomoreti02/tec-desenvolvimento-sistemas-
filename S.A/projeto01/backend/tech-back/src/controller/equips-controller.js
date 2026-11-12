import { deleteEquipService, getAllEquip, getEquipById, patchEquipService, postEquip, putEquipService } from "../services/equips-services.js"


export async function listAllEquip(request, response){
    const equips = await getAllEquip()

    return response.code(200).send(equips)
}

export async function listEquipById(request, response){
        const equip = await getEquipById(request.params.id)

        if(!equip) {
            response.code(404).send({ message: "Equip not found!"})
        }

        response.code(200).send(equip)
}

export async function createEquip(request, response) {
        const newEquips = await postEquip(request.body)

        response.code(201).send(newEquips)
}

export async function deleteEquip(request, response){
        const message = await deleteEquipService(request.params.id)

        response.code(202).send({ message: message })
    }

export async function putEquip(request, response) {
        const message = await putEquipService(request.params.id, request.body)

        response.code(200).send({ message:  message})
}

export async function patchEquip(request, response){
        const message = await patchEquipService(request.params.id, request.body)

        response.code(200).send({ message: message })
}