import path from "path";

export const UPLOAD_LINK = (image: string)=>{
    return path.join(process.cwd(), `uploads/${image}`) 
    // return '../../../../uploads/'+image
}

export const UPLOAD_DOMAIN = 'http://localhost:3001'