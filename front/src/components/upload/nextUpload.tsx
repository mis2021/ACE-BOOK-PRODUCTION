import type { NextPage } from 'next'
import React from "react";
import { UploadIcon } from "@/components/icons/upload-icon";
import { Control, Controller } from 'react-hook-form';

type Props = {
    register: any;
}

const NextUpload = ({register} : Props) => {

    const [isLoading, setIsLoading] = React.useState(false);
    const inputFileRef = React.useRef<HTMLInputElement | null>(register("postAt"));

    const handleOnClick = async (e: React.MouseEvent<HTMLInputElement>) => {

        /* Prevent form from submitting by default */
        e.preventDefault();

        /* If file is not selected, then show alert message */
        if (!inputFileRef.current?.files?.length) {
            alert('Please, select file you want to upload');
            return;
        }

        setIsLoading(true);

        /* Add files to FormData */
        const formData = new FormData();
        Object.values(inputFileRef.current.files).forEach(file => {
            formData.append('file', file);
        })

        /* Send request to our api route */
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });

        const body = await response.json() as { status: 'ok' | 'fail', message: string };

        alert(body.message);

        if (body.status === 'ok') {
            inputFileRef.current.value = '';
            // Do some stuff on successfully upload
        } else {
            // Do some stuff on error
        }

        setIsLoading(false);
    };

    return (
        // <form>
            <div className="border-dashed border-2 relative border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none">

                <UploadIcon className="text-muted-light" />
                <p className="text-body text-sm mt-4 text-center">
                <span className="font-semibold text-gray-500">Upload Files here...</span>
                
                    <input  type="file" name="postAtt" className='h-36 top-0 left-0 absolute w-full opacity-0  border-8' ref={inputFileRef} multiple />
                    {/* <input {...register('postAttachment')} type="file" name="myfile" className='h-36 top-0 left-0 absolute w-full opacity-0  border-8' ref={inputFileRef} multiple /> */}
                    {/* <input type="file" name="myfile" className='opacity-0' ref={inputFileRef} multiple /> */}
                </p>
            </div>
        //     <div>
        //         <input type="submit" value="Upload" disabled={isLoading} onClick={handleOnClick} />
        //         {isLoading && ` Wait, please...`}
        //     </div> 
        // </form>
    )
}

export default NextUpload