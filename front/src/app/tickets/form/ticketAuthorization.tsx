import Input from '@admin/components/ui/input';
import Button from '@admin/components/ui/button';
import Card from '@/components/common/card';
import Description from '@admin/components/ui/description';
import { getLayout } from '@/components/layouts/layout';
import { useTranslation } from 'next-i18next';
import TextArea from '@/components/ui/forms/text-area';
import SelectInput from '@admin/components/ui/select-input';
import Label from '@admin/components/ui/label';
import { useQuery } from '@apollo/client';
import { GET_ALL_DEPTS } from '@/graphql/queries/departments/departmentQueries';
import _ from 'lodash';
import { SEARCH_ACCS } from '@graphql/operations/accounts/accountQueries';

type Props = {
    register?: any;
    errors?: any;
    control?: any;
    createdByOpt?: any
    watch?: any
    setValue?: any
};

const TicketAutorization = ({ register, errors, control, createdByOpt, watch, setValue }: Props) => {

    const { data: alldepts, refetch } = useQuery(GET_ALL_DEPTS, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
    });

    const { data: searchedUser, refetch: refectUsSearch } = useQuery(SEARCH_ACCS, {
        variables: {
            name: null
        },
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
    });

  


    const getUserInputChange = (data: any) => {
      
        
        if (data != null || data != undefined || data != " ") {
            setTimeout(function () {
                refectUsSearch({
                    name: data
                })
            }, 500);
        }
    }

    const getUserChange = (data: any) => {
       
        setValue("requestedBy", data)
        if(confirm("Do you also want to change the requesting department base on requestor's department?")){
           
            setValue("requestingDepartment", _.get(data, "departmentOnDuty"))
        }
    }
    console.log("watch dep", watch("serviceDepartment"))
    return (
        <div className="my-5 flex flex-wrap sm:my-8">
            <Description
                title={'Ticket Authorization'}
                details={'Add/Check Employee and Department authorization.'}
                className="sm:pe-4 md:pe-5 w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3 "
            />

            <Card className="w-full sm:w-8/12 md:w-2/3">
                <div className="grid  gap-3 md:grid-cols-2 lg:grid-cols-2">
                    <div>
                        <div className="mb-5">
                            <Label>{'Created By *'}</Label>
                            <SelectInput
                                name="createdBy"
                                {...register('createdBy')}
                                errors={errors.createdBy?.message!}
                                control={control}
                                getOptionLabel={(option: any) => option.firstName + ", " + option.lastName}
                                // getOptionLabel={(option: any) => {option.firstName+", "+option.lastName}}
                                getOptionValue={(option: any) => option._id}
                                options={createdByOpt}
                                isLoading={false}
                            />
                        </div>
                    </div>
                    <div>
                        <div className='mb-5'>
                            <Label>{'Requested By *'}</Label>
                            <SelectInput
                                name="requestedBy"
                                {...register('requestedBy')}
                                errors={errors.requestedBy?.message!}
                                control={control}
                                getOptionLabel={(option: any) => option.firstName + ", " + option.lastName}
                                // getOptionLabel={(option: any) => {option.firstName+", "+option.lastName}}
                                getOptionValue={(option: any) => option._id}
                                options={_.get(searchedUser, "search_accounts.data")}
                                onInputChange={getUserInputChange}
                                isLoading={false}
                                onChange={getUserChange}
                                onSelectChange={getUserChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="grid  gap-3 md:grid-cols-2 lg:grid-cols-2 mb-5">
                    <div >
                        <Label>{'Service Department *'}</Label>
                        <SelectInput
                            name="serviceDepartment"
                            {...register('serviceDepartment')}
                            errors={errors.serviceDepartment?.message!}
                            control={control}
                            getOptionLabel={(option: any) => option.name}
                            getOptionValue={(option: any) => option._id}
                            options={
                                _.get(alldepts, 'departments.data')
                                    ? _.get(alldepts, 'departments.data')
                                    : []
                            }
                            isLoading={false}
                        // onInputChange={getUserChange}
                        />
                    </div>
                    <div>
                        <Label>{'Requesting Department *'}</Label>
                        <SelectInput
                            name="requestingDepartment"
                            {...register('requestingDepartment')}
                            errors={errors.requestingDepartment?.message!}
                            control={control}
                            getOptionLabel={(option: any) => option.name}
                            getOptionValue={(option: any) => option._id}
                            options={
                                _.get(alldepts, 'departments.data')
                                    ? _.get(alldepts, 'departments.data')
                                    : []
                            }
                            isLoading={false}
                        />
                    </div>
                </div>

                <div className="grid  gap-3 md:grid-cols-1 lg:grid-cols-1">
                    <div>
                        <Input
                            label={'Service Location'}
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