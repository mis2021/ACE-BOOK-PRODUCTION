import React from 'react'
import { FileIcon } from '../icons/file-icon'
import { FilmIcon } from '../icons/film-icon'
import { ImageIcon } from '../icons/image-icon'
import ImageUpload from './image'
import PreviewIndex from './previews'

type Props = {
    register: any;
    getValues?: any;
    watch?: any;
    setValue?: any;
}

const UploadIconContainer = ({ children }: any) => (
    <div className='w-10 cursor-pointer text-gray-400'>
        {children}
    </div>
)

const AttachmentUpload = ({ register, getValues, watch, setValue }: Props) => {
    return (
        <div className='pt-2 flex'>
            <UploadIconContainer>
                <ImageUpload register={register} watch={watch} getValues={getValues} setValue={setValue} />
                {/* <ImageIcon /> */}
            </UploadIconContainer>
            <UploadIconContainer>
                <FilmIcon />
            </UploadIconContainer>
            <UploadIconContainer>
                <FileIcon />
            </UploadIconContainer>

            <PreviewIndex attachments={watch("attachments_image")} />
        </div>
    )
}

export default AttachmentUpload