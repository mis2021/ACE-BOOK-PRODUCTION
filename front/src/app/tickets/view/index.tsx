import Input from '@admin/components/ui/input';
import Button from '@admin/components/ui/button';
import Card from '@/components/common/card';
import Description from '@admin/components/ui/description';
import { getLayout } from '@/components/layouts/layout';
import { useTranslation } from 'next-i18next';
import TextArea from '@/components/ui/forms/text-area';
import SelectInput from '@admin/components/ui/select-input';
import Label from '@admin/components/ui/label';
import { ticketStatusIdentifier, ticketTypeIdentifier, TICKET_TYPE } from '@/constants/options';
import PostedByDetails from '@/app/posts/components/postedByDetails';
import _ from 'lodash';
import PostTagIcon from '@/components/tags/tagIcon';
import PostTime from '@/app/posts/components/postTime';
import ReactTimeAgo from 'react-time-ago';
import InputLabelCont from '@/components/ui/labels/InputLabel';
import ViewAssigs from './viewAssigs';


type Props = {
    data?: any
}


const ViewTicketApp = ({ data }: Props) => {


    console.log("data", data)



    return (
        <div className='flex justify-center pt-3 mb-10'>
            <Card className="w-full sm:w-8/12 md:w-2/3">
                <div className='flex flex-wrap relative '>
                    <div className='relative md:absolute right-0'>
                        <div className='border-solid border-2 w-max p-2 rounded-lg flex justify-center'>
                            {(_.get(data, "tickets.data[0].type") ? ticketTypeIdentifier(_.get(data, "tickets.data[0].type"), 'name') : '') as string}
                        </div>
                    </div>
                    <div className='pt-3 md:pt-0 w-full'>

                        <div className='relative'>
                            <PostedByDetails firstName={_.get(data, "tickets.data[0].requestedBy.firstName")} lastName={_.get(data, "tickets.data[0].requestedBy.lastName")} department={_.get(data, "tickets.data[0].requestingDepartment.name")} />
                            <div className='absolute   top-[2.3rem] left-[3rem]'>
                                <div className='relative flex'>
                                    <div className="text-[12px] text-body">

                                        <ReactTimeAgo date={_.get(data, "tickets.data[0].dateRequested")} locale="en-US" />
                                        {/* <PostTime created_at={_.get(data, "tickets.data[0].dateRequested")} /> */}

                                        <b>  &nbsp; / needed &nbsp;<ReactTimeAgo date={_.get(data, "tickets.data[0].dateNeeded")} locale="en-US" /></b>
                                        {/* <PostTime created_at={_.get(data, "tickets.data[0].dateNeeded")} /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-4'>
                    <PostTagIcon name={(_.get(data, "tickets.data[0].status") ? ticketStatusIdentifier(_.get(data, "tickets.data[0].status"), 'name') : '') as string} bgClass={(_.get(data, "tickets.data[0].status") ? ticketStatusIdentifier(_.get(data, "tickets.data[0].status"), 'class') : '') as string} />
                </div>
                <div className='pt-3'>
                <h5 className="text-2xl font-normal leading-normal mt-0  text-stone-800">  {_.get(data, "tickets.data[0].subject")} </h5>
                </div>
                <div className='pt-1 pb-3' >
                    <p className="text-base font-light leading-relaxed mt-0 mb-0 text-zinc-800">
                        {_.get(data, "tickets.data[0].description")}  kk
                    </p>
                </div>
               
                <div className='pt-1 relative'>
                    <InputLabelCont label='Service Department' value={_.get(data, "tickets.data[0].serviceDepartment.name")} />
                    <InputLabelCont label='Service Location' value={_.get(data, "tickets.data[0].location")} />
                </div>
                <div>
                    <ViewAssigs data={_.get(data, "tickets.data[0].approvers")} />
                </div>


            </Card>
        </div>
    )
}

export default ViewTicketApp