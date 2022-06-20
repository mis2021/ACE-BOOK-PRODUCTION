import { XCircleIcon } from '@/components/icons/xcircle-icon';
import React, { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'

type Props = {
    attachment: any;
    triggerRemove?: any;
}

const ImagePreview = ({ attachment, triggerRemove }: Props) => {
    const [image, setImage] = useState("")
    const [isShowing, setIsShowing] = useState(true)

    useEffect(() => {
        if (attachment) {
            const inptImage = attachment
            var file = inptImage;
            var reader = new FileReader();
            var url = reader.readAsDataURL(file);

            reader.onloadend = function (e) {
                if (reader.result) {
                    setImage(reader.result as any)
                }
            };

        }
    }, [attachment])

    console.log("image", image)

    return (
        // <div className='bg-slate-200 w-20 h-20 rounded px-4'>
        <>
            {/* <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
                Toggle
            </button> */}
            <Transition
            appear={true}
                show={image ? true : false}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                {
                    image && <div className='relative'>
                        <div className='absolute z-40 w-5 h-5 pt-1 pr-1 right-0 cursor-pointer' onClick={e => triggerRemove && triggerRemove(attachment.name)}><XCircleIcon /></div>
                        <img className='w-20 h-20 rounded drop-shadow-md bg-slate-50' src={image} />
                    </div>
                }
            </Transition>
        </>

        // </div>
    )
}

export default ImagePreview