import React, { useEffect } from 'react'
import TextContent from './textContent'
import Button from '@admin/components/ui/button';
import PostedByDetails from '../postedByDetails';
import PostPrivacy from './postPrivacy';
import { useForm } from 'react-hook-form';

import { useMutation } from '@apollo/client';
import { UPSERT_POST } from '@graphql/operations/posts/postMutation';
import { PostFormValues } from '@/types/posts/postTypes';
import _ from 'lodash';
import { toast } from 'react-toastify';
import { getAuthCredentials, isAuthenticated } from "@utils/auth-utils";
import { yupResolver } from '@hookform/resolvers/yup';
import { postValidationSchema } from './formvalidations/post-validation-schema';
import PostDepartmentTag from './postDepartmentTag';
import { defaultValuesPost } from './defaulValuesPost';
import { extractObjectId } from '@/services/extractions';
import Uploader from '@/components/admin/components/common/uploader';
import FileInput from '@/components/admin/components/ui/file-input';
import NextUpload from '@/components/upload/nextUpload';
import { uploadAttachment } from '@/services/uploading';
import AttachmentUpload from '@/components/upload';
import PreviewIndex from '@/components/upload/previews';

type Props = {}





const PostFormIndex = (props: Props) => {
    const { id: userId, user } = getAuthCredentials();
    const [upsertPost] = useMutation(UPSERT_POST);

    const {
        register, handleSubmit, control, getValues, watch, setValue, reset,
        formState: { isDirty, errors },
    } = useForm<PostFormValues>({
        //@ts-ignore
        defaultValues: defaultValuesPost,
        resolver: yupResolver(postValidationSchema),
    });

    useEffect(() => {
        reset()
    }, [])


    const executeMutation = (payload: any) => {
        upsertPost({
            variables: {
                input: payload,
            },
        })
            .then((resp) => {
                toast.success("Post Created");
            })
            .catch((error) => {
                console.log("post error", error)
                toast.error("Failed to create post");
            });
    }

    const onSubmit = async (values: PostFormValues) => {

        let attachments: any = null

        // ====GENERAL ATTACHMENT====
        // if (values.attachments && values?.attachments?.length > 0) {
        //     attachments = values.attachments
        //     let attchArray = []
        //     for (let i = 0; i < values?.attachments?.length; i++) {
        //         attchArray.push(attachments[i].name)
        //     }
        //     attachments = attchArray
        // }

        // ====IMAGE ATTACHMENT====
        if (values.attachments_image && values?.attachments_image?.length > 0) {
            attachments = values.attachments_image
            let attchArray = []
            for (let i = 0; i < values?.attachments_image?.length; i++) {
                attchArray.push(attachments[i].name)
            }
            attachments = attchArray
        }


        let payload: PostFormValues;
        payload = _.cloneDeep(values)
        delete payload.tempAttachments
        delete payload.attachments_image
        delete payload.tempAttachments_image
        payload.attachments = attachments
        payload.privacy = _.get(payload, "privacy.value");
        payload.createdBy = userId
        payload.createdByDepartment = _.get(user, 'departmentOnDuty._id')
        payload.taggedDepartments = extractObjectId(values?.taggedDepartments)

        console.log("payload", payload)

        if (confirm('Comfirm post')) {
            let uploadResult: any

            if (values?.attachments && values?.attachments?.length > 0) {
                uploadResult = uploadAttachment(values.attachments)
                console.log("result sat", (await uploadResult).status)
            }


            if (values.attachments && values?.attachments?.length > 0) {
                if ((await uploadResult).status == "ok") {
                    executeMutation(payload)
                } else {
                    toast.error("Failed to upload attachments");
                }
            } else {
                executeMutation(payload)
            }

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
                            <div className="row-span-3 "> <PostedByDetails firstName={_.get(user, 'firstName')} lastName={_.get(user, 'lastName')} department={_.get(user, 'departmentOnDuty.name')} /></div>
                            <div className="row-span-3 place-self-end"><Button loading={false}>Post</Button></div>
                        </div>

                        <TextContent register={register} />
                        <PostPrivacy control={control} register={register} />
                        <PostDepartmentTag control={control} register={register} />



                        {/* <NextUpload register={register} getValues={getValues} watch={watch} setValue={setValue} /> */}
                        {/* <Uploader
                            // {...rest}
                            multiple={true}
                            acceptFile={true}
                            helperText={"Upload documents here..."}
                        /> */}
                        {/* <FileInput name="postUpload" control={control} multiple={true} helperText="Upload files here..." /> */}
                        <hr />
                        <AttachmentUpload register={register} watch={watch} getValues={getValues} setValue={setValue} />

                        {/* <PreviewIndex attachments={watch("attachments_image")} /> */}
                        <div className='h-screen'></div>

                    </div>
                    {/* </div> */}
                </article>
            </form>
        </div >
    )
}

export default PostFormIndex