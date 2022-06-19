import React, { useEffect, useState } from 'react'
import ImagePreview from './imagePreview';

type Props = {
    attachments?: any;
}

const PreviewIndex = ({ attachments }: Props) => {

    return (
        <div className='flex'>

            {
               attachments && attachments.map((item: any) => (
                    <ImagePreview attachment={item} />
                    // <ImagePreview attachment={watch("attachments")}/>
                ))
            }
        </div>
    )
}

export default PreviewIndex