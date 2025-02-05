
import Todos from '../models/todos.model'

const getTodos = async (user_id:any = '1') => await Todos.find({ user_id })

export const get = async (req:any, res:any) => {

    try 
    {
        const data = await getTodos(req.query.user_id)

        return res.json({ status: 'ok', data })
    }
    catch(err)
    {
        console.log(err)
    }

    res.json({ status: 'err' })
}

export const add = async (req:any, res:any) => {

    try 
    {
        await Todos.create(req.body)

        const data = await getTodos(req.body.user_id)

        return res.json({ status: 'ok', data })
    }
    catch(err)
    {
        console.log(err)
    }

    res.json({ status: 'err' })
}

export const edit = async (req:any, res:any) => {

    try 
    {
        await Todos.updateOne({ _id: req.body._id, user_id: req.body.user_id }, req.body)

        const data = await getTodos(req.body.user_id)
       
        return res.json({ status: 'ok', data })
    }
    catch(err)
    {
        console.log(err)
    }

    res.json({ status: 'err' })
}

export const changeComplete = async (req:any, res:any) => {

    try 
    {
        await Todos.updateOne({ _id: req.body._id, user_id: req.body.user_id }, { complete: req.body.complete })

        const data = await getTodos(req.body.user_id)

        return res.json({ status: 'ok', data })
    }
    catch(err)
    {
        console.log(err)
    }

    res.json({ status: 'err' })
}


export const remove = async (req:any, res:any) => {

    try 
    {
        await Todos.deleteOne({ _id: req.query.id, user_id: req.query.user_id })

        const data = await getTodos(req.query.user_id)

        return res.json({ status: 'ok', data })
    }
    catch(err)
    {
        console.log(err)
    }

    res.json({ status: 'err' })
}