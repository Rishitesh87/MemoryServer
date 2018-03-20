// src/index.ts
import 'reflect-metadata'
import {createKoaServer,Action} from "routing-controllers"
import Controller from "./controller"
import setupDb from './db'
import UserController from './users/controller'
import LoginController from './logins/controller'


const port = process.env.PORT || 4000

const app = createKoaServer({
   controllers: [
     UserController
     LoginController
   ]

   authorizationChecker: (action: Action) => {
     const header: string = action.request.headers.authorization
     if (header && header.startsWith('Bearer ')) {
       const [ , token ] = header.split(' ')

       try {
         return !!(token && verify(token))
       }
       catch (e) {
         throw new BadRequestError(e)
       }
     }

     return false
   },
   currentUserChecker: async (action: Action) => {
     const header: string = action.request.headers.authorization
     if (header && header.startsWith('Bearer ')) {
       const [ , token ] = header.split(' ')

       if (token) {
         const {id} = verify(token)
         return User.findOneById(id)
       }
     }
     return undefined
   }
})

setupDb()
  .then(_ => {
    app.listen(port)
    console.log(`Listening on port ${port}`)
  })
  .catch(err => console.error(err))
