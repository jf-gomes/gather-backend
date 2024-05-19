import { Router } from "express";
import { Event} from "./controllers/EventController";

const routes = Router()

routes.get('/events/show', (req, res) => {
    const event = new Event
    event.get(req, res)
})

routes.post('/events/create', (req, res) => {
    const event = new Event
    event.create(req, res)
})

routes.delete('/events/delete/:id', (req, res) => {
    const event = new Event
    event.del(req, res)
})

routes.get('/events/getinfobyid/:id', (req, res) => {
    const event = new Event
    event.getEventInfoById(req, res)
})

export default routes