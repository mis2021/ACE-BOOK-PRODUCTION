import Input from '@admin/components/ui/input';
import Button from '@admin/components/ui/button';
import Card from '@/components/common/card';
import Description from '@admin/components/ui/description';
import { getLayout } from '@/components/layouts/layout';
import { useTranslation } from 'next-i18next';
import AttachmentUpload from '@/components/upload';
import { PropForm } from '@/types/forms/propHookForm';

const ProfileUpload = ({register,...props} : PropForm) => {
    const { t } = useTranslation();
  return (
    <>
      <div className="my-5 flex flex-wrap sm:my-8">
        <Description
          title={'Basic Information'}
          details={'Identify of your account'}
          className="sm:pe-4 md:pe-5 w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3 "
        />

        <Card className="w-full sm:w-8/12 md:w-2/3">
          <div className="grid  gap-3 md:grid-cols-1 lg:grid-cols-1">
            <div>
              {/* <Input
                label={'Upload *'}
                {...register('firstName')}
                error={t(errors.firstName?.message!)}
                variant="outline"
                className="mb-5"
              /> */}
                 <AttachmentUpload
                  register={register} 
                  watch={props.watch} 
                  getValues={props.getValues} 
                  setValue={props.setValue}
                  
                  />
            </div>
          </div>

        </Card>
      </div>
    </>
  );
};


export default ProfileUpload;
