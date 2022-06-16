import React, {useContext} from 'react'
import CommentForm from './commentForm'
import CommentList from './commentList'

type Props = {}
const GenComments = (props: Props) => {

    return (
        <div className='item-center w-full  px-2 pt-3'>
            <hr />
            <div className='pt-2'>
                <CommentForm/>
                <CommentList/>
            </div>
        </div>
    )
}

export default GenComments