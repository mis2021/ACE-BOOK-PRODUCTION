import Input from '@admin/components/ui/input';
import { Control, FieldErrors, useForm } from 'react-hook-form';
import Button from '@admin/components/ui/button';
import TextArea from '@admin/components/ui/text-area';
import Label from '@admin/components/ui/label';
// import { useTypesQuery } from "@graphql/type.graphql";
import Card from '@/components/common/card';
import Description from '@admin/components/ui/description';
import * as categoriesIcon from '@/components/icons/category';
import { getIcon } from '@/utils/get-icon';
import { useRouter } from 'next/router';
// import { ROUTES } from "@utils/routes";
import { getErrorMessage } from '@/utils/form-error';
import ValidationError from '@admin/components/ui/form-validation-error';
import { toast } from 'react-toastify';
// import { tagIcons } from "./tag-icons";
import { useTranslation } from 'next-i18next';
import FileInput from '@admin/components/ui/file-input';
// import SelectInput from "@components/ui/select-input";
import { yupResolver } from '@hookform/resolvers/yup';
import { getFormattedImage } from '@/utils/get-formatted-image';
import { getLayout } from '@/components/layouts/layout';
// import {
//   useCreateTagMutation,
//   useUpdateTagMutation,
// } from "@graphql/tags.graphql";
import { accValidationSchema } from './formvalidations/acc-validation-schema';
// import { tagValidationSchema } from "./tag-validation-schema";
import { Tag } from '__generated__/__types__';
import { NextPageWithLayout } from '@/types';
import { gql, useMutation } from '@apollo/client';
import { UPSERT_DEPARTMENT } from '@graphql/operations/departments/departmentMutations';
import cn from 'classnames';
import AccBasicInfo from './basicInfo';
import AccEmpInfo from './employeeInfo';
import BorderDashed from '@/components/ui/border';
import AccCredentials from './credentials';
import ContactInfo from './contactInfo';
import { AccFormValues } from '@/types/accounts/accountTypes';

const defaultValues = {
  deptName: '',
  description: '',
};

type IProps = {
  initialValues?: null;
};

const AccountForm: NextPageWithLayout = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AccFormValues>({
    //@ts-ignore
    // defaultValues: defaultValues,

    resolver: yupResolver(accValidationSchema),
  });
  const [upsertDept] = useMutation(UPSERT_DEPARTMENT);

  console.log("control", control)
  const onSubmit = async (values: AccFormValues) => {
    console.log('input', values);

    // if (confirm('Are you sure you want to add department?')) {
    //   upsertDept({
    //     variables: {
    //       input: input,
    //     },
    //   })
    //     .then((resp) => {
    //       toast.success(t('Department successfully saved'));
    //       console.log('resp', resp);
    //     })
    //     .catch((error) => {});
    // }
  };
  const column = 'auto';
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BorderDashed>
          <AccBasicInfo register={register} errors={errors} />
        </BorderDashed>
        <BorderDashed>
          <AccEmpInfo register={register} errors={errors} control={control}/>
        </BorderDashed>
        <BorderDashed>
          <ContactInfo register={register} errors={errors} />
        </BorderDashed>
        <AccCredentials register={register} errors={errors} />
        <div className="text-end mb-4 ">
                  {/* <div className="text-end mb-4
        px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0
        
        "> */}
          <Button loading={false}>Save Details</Button>
        </div>
      </form>
    
    </>
  );
};

AccountForm.getLayout = getLayout;

export default AccountForm;
