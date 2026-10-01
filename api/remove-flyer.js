import {sql,init} from '../lib/db.js';
export default async function handler(req,res){try{await init();const {store}=req.body||{};await sql`update flyers set active=false where store=${store}`;await sql`update offers set active=false where store=${store}`;res.json({ok:true})}catch(e){res.status(500).json({error:e.message})}}
