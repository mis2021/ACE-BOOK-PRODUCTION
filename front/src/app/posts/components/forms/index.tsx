import React from 'react'
import TextContent from './textContent'

type Props = {}

const PostFormIndex = (props: Props) => {
    return (
        <div>
            <article className="bg-light w-full  max-w-6xl xl:min-w-[1152px] relative z-[51] md:rounded-xl">
                <div className='m-4'>
                    <TextContent />

                </div>

            </article>
        </div>
    )
}

export default PostFormIndex