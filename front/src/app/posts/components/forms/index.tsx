import React from 'react'
import TextContent from './textContent'
import Button from '@admin/components/ui/button';
import PostedByDetails from '../postedByDetails';
import PostPrivacy from './postPrivacy';
import { useForm } from 'react-hook-form';
import * as categoriesIcon from "@admin/components/icons/category";
import { getIcon } from "@utils/get-icon";
import { useMutation } from '@apollo/client';
import { UPSERT_POST } from '@graphql/operations/posts/postMutation';
import { PostFormValues } from '@/types/posts/postTypes';
import _ from 'lodash';
import { toast } from 'react-toastify';
import { getAuthCredentials, isAuthenticated } from "@utils/auth-utils";

type Props = {}

const defaultValues = {
    privacy: {
        value: "Public", label: (
            <div className="flex space-s-5 items-center">
                <span className="flex w-5 h-5 items-center justify-center">
                    {getIcon({
                        iconList: categoriesIcon,
                        iconName: "Public",
                        className: "max-h-full max-w-full",
                    })}
                </span>
                <span>Public</span>
            </div>
        )
    }
}


const PostFormIndex = (props: Props) => {
    const { token, permissions, id :userId} = getAuthCredentials();
    const [upsertPost] = useMutation(UPSERT_POST);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<PostFormValues>({
        //@ts-ignore
        defaultValues: defaultValues,
        // resolver: {},
    });

    

    const onSubmit = async (values: PostFormValues) => {

        let payload: PostFormValues;
        payload = _.cloneDeep(values)
        payload.privacy = _.get(payload, "privacy.value");
        payload.createdBy = userId

        console.log("payload", payload)

        if (confirm('Comfirm post')) {
            upsertPost({
                variables: {
                    input: payload,
                },
            })
                .then((resp) => {
                    console.log("post repsonse", resp)
                    toast.success("Post Created");

                })
                .catch((error) => {
                    console.log("post error", error)
                    toast.error("Failed to create post");
                });
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <article className="bg-light max-w-6xl w-screen h-full  md:h-auto md:w-[800px] xl:min-w-[800px] relative z-[51] md:rounded-xl">
                    {/* <article className="bg-light w-full  max-w-6xl xl:min-w-[1152px] relative z-[51] md:rounded-xl"> */}
                    {/* <div className='m-4 p-4'> */}
                    <div className="p-5 pt-15 md:pb-10 lg:p-14 xl:p-8">

                        <div className="mb-4 mt-5 grid grid-flow-col  gap-4">
                            <div className="row-span-3 "> <PostedByDetails /></div>
                            <div className="row-span-3 place-self-end"><Button loading={false}>Post</Button></div>
                        </div>

                        <TextContent register={register} />
                        <PostPrivacy control={control} register={register} />
                        <div className='h-screen'></div>

                    </div>
                    {/* </div> */}
                </article>
            </form>
        </div >
    )
}

export default PostFormIndex