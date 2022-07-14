import { TicketTypeForm } from '@/types/tickets/ticketType';
import React, { useState, useEffect } from 'react'
import TicketApprovers from './assignatories'
import { useForm } from 'react-hook-form';
import Card from '@/components/common/card';
import TicketTypeDetails from './details';
import CardRight from '@/components/ui/cards/cardRight';
import { ticketTypeIdentifier } from '@/constants/options';
import Button from '@admin/components/ui/button';
import { extractObjectId } from '@/services/extractions';

type Props = {
  code?: string;
}
type StateType = {
  name?: string;
}

const TicketTypeForm = ({ code }: Props) => {
  const [state, setState] = useState({ name: '' })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue
  } = useForm<TicketTypeForm>({
    //@ts-ignore
    defaultValues: {},

    // resolver: ,
  });

  const onSubmit = async (values: TicketTypeForm) => {


    values.approver = extractObjectId(values.approver)
    console.log("values", values)
  }

  useEffect(() => {
    if (code) {
      const typeName: string = ticketTypeIdentifier(code as string, "name") as string;
      setState((p) => ({ ...p, name: typeName }))
    }
  }, [code])




  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* <TicketTypeDetails code={code}/> */}
        <CardRight>
          <>
            <span className='font-semibold'>  {state.name}</span>
          </>
        </CardRight>
        <TicketApprovers register={register} errors={errors} control={control} setValue={setValue} />
        <div className="text-end mb-4 ">
          <Button loading={false}>Save Details</Button>
        </div>
      </form>
    </div>
  )
}

export default TicketTypeForm