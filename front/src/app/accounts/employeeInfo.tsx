import Input from '@admin/components/ui/input';
import Button from '@admin/components/ui/button';
import Card from '@/components/common/card';
import Description from '@admin/components/ui/description';
import { getLayout } from '@/components/layouts/layout';
import { useTranslation } from 'next-i18next';
import Checkbox from '@admin/components/ui/checkbox/checkbox';

type Props = {
  register?: any;
  errors?: any;
};

const AccEmpInfo = ({ register, errors }: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="my-5 flex flex-wrap sm:my-8">
        <Description
          title={'Employee Information'}
          details={
            "Add user's employment details and necessary information from here"
          }
          className="sm:pe-4 md:pe-5 w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3 "
        />

        <Card className="w-full sm:w-8/12 md:w-2/3">
          <Input
            label={'Position'}
            {...register('position')}
            error={t(errors.position?.message!)}
            variant="outline"
            className="mb-5"
          />
          <div className="grid  gap-3 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <Input
                label={'Origin Department'}
                {...register('department')}
                error={t(errors.department?.message!)}
                variant="outline"
                className="mb-5"
              />
            </div>
            <div>
              <Input
                label={'Department on Duty'}
                {...register('departmentOnDuty')}
                error={t(errors.departmentOnDuty?.message!)}
                variant="outline"
                className="mb-5"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-6">
            <div>
              <Checkbox
                {...register('isActive')}
                id="is_active"
                label={t(' is Active')}
                // disabled={Boolean(false)}
                // disabled={Boolean(is_external)}
                className="mb-5"
              />
            </div>
            <div>
              <Checkbox
                {...register('isApprover')}
                id="is_approver"
                label={t(' is Approver')}
                // disabled={Boolean(false)}
                // disabled={Boolean(is_external)}
                className="mb-5"
              />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default AccEmpInfo;
