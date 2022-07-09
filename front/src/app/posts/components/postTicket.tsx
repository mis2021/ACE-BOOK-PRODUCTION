import PostTagIcon from '@/components/tags/tagIcon'
import { ticketStatusIdentifier } from '@/constants/options';
import React from 'react'

type Props = {
    ticket: any;
}

const PostTicket = ({ticket}: Props) => {
  return (
    <div>
        <PostTagIcon name={ticketStatusIdentifier(ticket?.status)} />
    </div>
  )
}

export default PostTicket