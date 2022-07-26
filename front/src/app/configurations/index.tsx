import { Tickets } from '@/components/icons/category'
import Card from '@/components/ui/cards/card'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Configs = (props: Props) => {
    return (
        <div className='flex md:w-full justify-center'>

            <Link href={'/tickets/types'}>
                    <Card className='w-full md:w-3/6 cursor-pointer flex'>
                     <Tickets/>  
                     <span className='pl-5'> Ticket Settings </span>
                    </Card>
            </Link>


        </div>
    )
}

export default Configs