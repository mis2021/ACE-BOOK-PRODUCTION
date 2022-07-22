import Card from '@/components/common/card'
import Button from '@/components/ui/button'
import Link from '@/components/ui/link'
import React from 'react'

type Props = {}

const ProfileApp = (props: Props) => {
    return (
        <div>
            <Card>
                <Link href={'/profile/update'}><>  <Button>UPDATE</Button></></Link>
            </Card>
        </div>
    )
}

export default ProfileApp