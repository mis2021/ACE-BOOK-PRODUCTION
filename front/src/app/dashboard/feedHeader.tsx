import Card from '@/components/common/card'
import Button from '@/components/ui/button'
import React from 'react'
import LinkButton from '@admin/components/ui/link-button';

type Props = {}

const FeedHeader = (props: Props) => {
    return (
        <div>

            <Card className="mb-2 p-4 md:p-6 flex flex-col items-center xl:flex-row">
                <div className="mb-4 md:w-9/12 xl:mb-0">
                    <h1 className="text-xl font-light font-sans text-zinc-400">Tell us your concerns....</h1>
                </div>

                <div className="ms-auto flex w-full flex-col items-center space-y-4 md:flex-row md:space-y-0 xl:w-1/2 mx-6">
                    <LinkButton
                        href={ '#'}
                        className="md:ms-6 mx-3 h-12 w-full "
                        // className="md:ms-6 mx-3 h-12 w-full md:w-auto"
                    >
                        <span className="block md:hidden xl:block">Create Post</span>
                        <span className="hidden md:block xl:hidden">Create Post</span>
                    </LinkButton>
                </div>
            </Card>




        </div>
    )
}

export default FeedHeader