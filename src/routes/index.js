import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => res.render('index.ejs',{titulo: 'Primera Web con Node'}))
router.get('/about', (req, res) => res.render('about.ejs',{titulo: 'Sobre Nosotros'}))
router.get('/contact', (req, res) => res.render('contact.ejs',{titulo: 'Contactanos'}))

export default router