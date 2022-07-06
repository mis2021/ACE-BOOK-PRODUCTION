import { UPLOAD_DOMAIN, UPLOAD_LINK } from "@/constants/uploads";
import _ from "lodash";

type AttchDataType = {
    size?: number;
    type?: string;
    name?: string;
}

export const extractObjectId = (data: any) => {
    let stringArray = null;
    if (data) {
        stringArray = data.map((item: any) => {
            return item._id;
        });
    }


    return stringArray;
}


export const extractAttch = (data: any, type: string) => {
    let stringArray = null;
    if (data) {
        stringArray = data.filter((item: any) => {
            if (item.type == type) {
                return item.path;
            }
        });
    }
    return stringArray;
}

export const extractFileBlob = async (attachments: any, type: string) => {

    const test = async () => {

        const map1 = await Promise.all(attachments.map(async (item: any) => await fetch( UPLOAD_LINK(type,item.path)).then(async r => {
        // const map1 = await Promise.all(attachments.map(async (item: any) => await fetch(UPLOAD_DOMAIN + UPLOAD_LINK(`${type}/` + item.path)).then(async r => {
            let blobdata = await r.blob()
            let file = new File([blobdata], r.url.substring(r.url.lastIndexOf('/') + 1))
            return file
        }
        )
        ));
        return map1;
    }

    let blobImage = test().then((data) => {
        return data
    })
    return await blobImage;
}




