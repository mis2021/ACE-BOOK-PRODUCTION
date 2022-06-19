import React, { useEffect, useState } from 'react'

type Props = {
    attachment: any;
}

const ImagePreview = ({ attachment }: Props) => {
    const [image, setImage] = useState("")

    useEffect(() => {
        if (attachment ) {
            const inptImage = attachment
            var file = inptImage;
            var reader = new FileReader();
            var url = reader.readAsDataURL(file);

            reader.onloadend = function (e) {
                console.log("reader file", reader.result)
                if (reader.result) {
                    setImage(reader.result as any)
                }
            };

        }
    }, [attachment])
    return (
        <div>
            <img src={image} />
        </div>
    )
}

export default ImagePreview