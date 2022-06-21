import path from "path";

export const UPLOAD_LINK = (image: string)=>{
    return path.join(process.cwd(), `uploads/${image}`) 
    // return '../../../../uploads/'+image
}