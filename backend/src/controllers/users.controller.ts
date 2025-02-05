import bcrypt from 'bcrypt'
import { v4 } from 'uuid'
import Users from '../models/users.model'

export const register = async (req:any, res:any) => {

    try 
    {
        const exist = await Users.findOne({ email: req.body.email })

        console.log(exist)
    
        if(exist)
            return res.json({ status: 'exist' })

        const hash = bcrypt.hashSync(req.body.pass, 5)

        await Users.create({ ...req.body, pass: hash })

        return res.json({ status: 'ok' })
    }
    catch(err)
    {
        console.log(err)
    }

    res.json({ status: 'err' })
}

export const login = async (req:any, res:any) => {

    const { email, pass } = req.body

    const exist = await Users.findOne({ email })

    if(exist)
    {
        if(bcrypt.compareSync(pass, exist.pass))
        {
            const token_login = v4()

            exist.token_login = token_login 
            exist.save()

            return res.json({ status: 'ok', token_login })
        }

        return res.json({ status: 'incorrect' })
    }


    res.json({ status: 'err' })
}

export const auth = async (req:any, res:any) => {

    const exist = await Users.findOne({ token_login: req.query.t }) 

    if(exist)
        return res.json({ status: 'ok', data: { _id: exist._id, username: exist.username }})

    res.json({ status: 'err' })

}