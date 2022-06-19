import React from 'react'
import { FileIcon } from '../icons/file-icon'
import { FilmIcon } from '../icons/film-icon'
import { ImageIcon } from '../icons/image-icon'

type Props = {}

const UploadIconContainer = ({ children }: any) => (
    <div className='w-10 cursor-pointer text-gray-400'>
        {children}
    </div>
)

const AttachmentUpload = (props: Props) => {
    return (
        <div className='pt-2 flex'>
            <UploadIconContainer>
                <ImageIcon />
            </UploadIconContainer>
            <UploadIconContainer>
                <FilmIcon />
            </UploadIconContainer>
            <UploadIconContainer>
                <FileIcon />
            </UploadIconContainer>
        </div>
    )
}

export default AttachmentUpload