import Input from '@admin/components/ui/input';
import Button from '@admin/components/ui/button';
import Card from '@/components/common/card';
import Description from '@admin/components/ui/description';
import { getLayout } from '@/components/layouts/layout';
import { useTranslation } from 'next-i18next';
import TextArea from '@/components/ui/forms/text-area';

type Props = {
    register?: any;
    errors?: any;
};

const TicketAutorization = ({ register, errors }: Props) => {
    return (
        <div className="my-5 flex flex-wrap sm:my-8">
            <Description
                title={'Ticket Authorization'}
                details={'Add and Check Employee and Department authorization.'}
                className="sm:pe-4 md:pe-5 w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3 "
            />

            <Card className="w-full sm:w-8/12 md:w-2/3">
                <div className="grid  gap-3 md:grid-cols-2 lg:grid-cols-2">
                    <div>
                        <Input
                            label={'Created By'}
                            {...register('createdBy')}
                            error={errors.createdBy?.message!}
                            variant="outline"
                            className="mb-5"
                        />
                    </div> 
                    <div>
                        <Input
                            label={'Requested By *'}
                            {...register('requestedBy')}
                            error={errors.requestedBy?.message!}
                            variant="outline"
                            className="mb-5"
                        />
                    </div>
                </div>
                <div className="grid  gap-3 md:grid-cols-2 lg:grid-cols-2">
                    <div>
                        <Input
                            label={'Service Department *'}
                            {...register('serviceDepartment')}
                            error={errors.createdBy?.message!}
                            variant="outline"
                            className="mb-5"
                        />
                    </div> 
                    <div>
                        <Input
                            label={'Requesting Department *'}
                            {...register('requestingDepartment')}
                            error={errors.requestingDepartment?.message!}
                            variant="outline"
                            className="mb-5"
                        />
                    </div>
                </div>
                
                <div className="grid  gap-3 md:grid-cols-1 lg:grid-cols-1">
                    <div>
                        <Input
                            label={'Service Location *'}
                            {...register('location')}
                            error={errors.location?.message!}
                            variant="outline"
                            className="mb-5"
                        />
                    </div>
                </div>

            </Card>
        </div>
    )
}

export default TicketAutorization