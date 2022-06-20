import React, { useEffect, useState } from 'react'
import ImagePreview from './imagePreview';

type Props = {
    attachments?: any;
    triggerRemove? : any
}

const PreviewIndex = ({ attachments, triggerRemove }: Props) => {

    return (

        <div className='relative flex gap-3 pt-4'>
            {
               attachments && attachments.map((item: any) => (
                    <ImagePreview attachment={item} triggerRemove={(e : any)=> triggerRemove && triggerRemove(e)}/>
                    // <ImagePreview attachment={watch("attachments")}/>
                ))
            }
        </div>
    )
}

export default PreviewIndex