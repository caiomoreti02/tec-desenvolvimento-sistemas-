import { v4 } from 'uuid'
import { createEquip, deleteEquip, listAllEquip, listEquipById, patchEquip, putEquip } from '../controller/equips-controller.js'

export async function equipRoutes(app) {
    
    app.get('/', listAllEquip)
    
    app.get('/:id', listEquipById)
    
    app.post('/', createEquip)
    
    app.delete('/:id', deleteEquip)
    
    app.put('/:id', putEquip)
    
    app.patch('/:id', patchEquip)
}