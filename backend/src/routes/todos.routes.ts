import { Router } from 'express'

import { get, add, edit, changeComplete, remove } from '../controllers/todos.controller'

const router = Router()

router.get('/', get)
router.post('/', add)
router.put('/', edit)
router.put('/change', changeComplete)
router.delete('/', remove)


export default router