import React from 'react'
import { FileIcon } from '../icons/file-icon'
import { FilmIcon } from '../icons/film-icon'
import FileUpload from './file'
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

    const removeAttachment = (data: any) => {
        let imagesAttch = getValues("attachments_image");
        imagesAttch = imagesAttch.filter((item: any) => {
            return item.name !== data
        })

        setValue("attachments_image", imagesAttch)
    }

    return (
        <>
            <div className='pt-2 flex'>
                <UploadIconContainer>
                    <ImageUpload register={register} watch={watch} getValues={getValues} setValue={setValue} />
                </UploadIconContainer>
                {/* <UploadIconContainer>
                    <FilmIcon />
                </UploadIconContainer> */}
                <UploadIconContainer>
                    <FileUpload register={register} watch={watch} getValues={getValues} setValue={setValue} />
                    {/* <FileIcon /> */}
                </UploadIconContainer>
            </div>
            {/* ======================================================== */}
            <PreviewIndex attachments={watch("attachments_image")} triggerRemove={removeAttachment} type='image' />
            <PreviewIndex attachments={watch("attachments_file")} triggerRemove={removeAttachment} type='file' />
        </>
    )
}

export default AttachmentUpload