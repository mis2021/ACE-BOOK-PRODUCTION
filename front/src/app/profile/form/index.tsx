import React from 'react'
import { useForm } from 'react-hook-form';
import {
    AccFormValues,
  } from '@/types/accounts/accountTypes';
import ProfileUpload from './profileUpload';
type Props = {}

const ProfileForm = (props: Props) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
      } = useForm<AccFormValues>({
        //@ts-ignore
        defaultValues:  {},
    
        // resolver: yupResolver({defaultValues ? accValidationSchemaUpdate : accValidationSchema}),
      });
  return (
    <div>

        <ProfileUpload register={register} errors={errors} />
    </div>
  )
}

export default ProfileForm