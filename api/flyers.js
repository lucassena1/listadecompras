import {sql,init} from '../lib/db.js';
export default async function handler(req,res){try{await init();const r=await sql`select id,store,filename,blob_url,active,offers_count,created_at from flyers order by created_at desc`;res.status(200).json(r)}catch(e){res.status(500).json({error:e.message})}}
