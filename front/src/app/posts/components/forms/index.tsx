import React from 'react'
import TextContent from './textContent'
import Button from '@admin/components/ui/button';
import PostedByDetails from '../postedByDetails';
import PostPrivacy from './postPrivacy';
import { useForm } from 'react-hook-form';

type Props = {}

const PostFormIndex = (props: Props) => {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
      } = useForm({
        //@ts-ignore
        defaultValues:  {},
        // resolver: {},
      });

    return (
        <div>
            <article className="bg-light max-w-6xl w-screen h-full  md:h-auto md:w-[800px] xl:min-w-[800px] relative z-[51] md:rounded-xl">
                {/* <article className="bg-light w-full  max-w-6xl xl:min-w-[1152px] relative z-[51] md:rounded-xl"> */}
                {/* <div className='m-4 p-4'> */}
                <div className="p-5 pt-15 md:pb-10 lg:p-14 xl:p-8">

                    <div className="mb-4 mt-5 grid grid-flow-col  gap-4">
                        <div className="row-span-3 "> <PostedByDetails/></div>
                        <div className="row-span-3 place-self-end">   <Button loading={false}>Post</Button></div>
                    </div>

                    <TextContent register={register}/>
                    <PostPrivacy control={control} />
                    <div className='h-screen'></div>

                </div>
                {/* </div> */}
            </article>
        </div>
    )
}

export default PostFormIndex