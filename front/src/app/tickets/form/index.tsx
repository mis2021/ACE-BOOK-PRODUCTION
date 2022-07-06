import React from 'react'
import TicketDescription from './ticketDescription'
import { useForm } from 'react-hook-form';
import { TicketFormValues } from '@/types/tickets/ticketType';
import { yupResolver } from '@hookform/resolvers/yup';
import { ticketValidationSchema } from './formvalidations/ticket-validation-schema';
import BorderDashed from '@/components/ui/border';
import TicketAutorization from './ticketAuthorization';
import Button from '@admin/components/ui/button';
import { useMutation } from '@apollo/client';
import { UPSERT_TICKET } from '@graphql/operations/tickets/ticketMutation';
import { toast } from 'react-toastify';

type Props = {}

const TicketForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TicketFormValues>({
    //@ts-ignore
    defaultValues: {},

    resolver: yupResolver(ticketValidationSchema),
  });


  const [upsertAcc] = useMutation(UPSERT_TICKET);

  const onSubmit = async (values: TicketFormValues) => {
    console.log("valss", values)
    if (confirm('Are you sure you want to save ticket?')) {
      upsertAcc({
        variables: {
          input: values,
        },
      })
        .then((resp) => {
          console.log("resp", resp)
          toast.success('Ticket successfully saved');

        })
        .catch((error) => {
         
          toast.error('Ticket failed to save');
        });
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TicketDescription register={register} errors={errors} />
        <BorderDashed />
        <TicketAutorization register={register} errors={errors} />
        <div className="text-end mb-4 ">
          <Button loading={false}>Save Details</Button>
        </div>
      </form>
    </div>
  )
}

export default TicketForm