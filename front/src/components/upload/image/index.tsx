import React from 'react'

type Props = {}

const ImageUpload = (props: Props) => {



    const handleChange = (e: any)=>{
        console.log("file", e)

    }
  return (
    <div>
         <input 
        type="file" 
        name="image" 
        onChange={e=>handleChange(e.target.value)}/>
    </div>
  )
}

export default ImageUpload