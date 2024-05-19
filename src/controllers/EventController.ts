import Events from "../models/Events";

class Event {
    authenticate(password: string): boolean{
        return password == process.env.ROUTES_PASSWORD
    }

    async create(req: any, res: any){
        const { password } = req.body
        if (this.authenticate(password)){
            const response = await Events.create(req.body)
            return res.status(201).json("Event created.")
        } else {
            return res.status(403).json("Wrong password.")
        }
    }

    async get(req: any, res: any){
        const response = await Events.find()
        return res.status(200).json(response)
    }

    async del(req: any, res: any){
        const { password } = req.body
        if (this.authenticate(password)){
            const id = req.params.id
            const response = await Events.findByIdAndDelete(id)
            return res.status(201).json("Event deleted successfully.")
        } else {
            return res.status(403).json("Wrong password")
        }
    }

    async getEventInfoById(req: any, res: any){
        const id = req.params.id
        const response = await Events.find({ _id: id })
        return res.status(200).json(response)
    }
  }

export {
    Event
}