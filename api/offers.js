import {sql,init} from '../lib/db.js';
export default async function handler(req,res){try{await init();const r=await sql`select store,product,normalized,price,unit_price,unit_basis,size_value,size_unit,condition,created_at from offers where active=true order by store,product`;res.json(r)}catch(e){res.status(500).json({error:e.message})}}
