import React, { useState } from 'react'
import { Comment, Avatar, Button, Input,Tooltip } from 'antd';
import Icon from '@ant-design/icons';
import Axios from 'axios';
import wow_avatar from "../../images/app-mockup.png"
import 'antd/dist/antd.css';
// import { useSelector } from 'react-redux';
import LikeDislikes from './LikeDislikes';
// import './index.css';

import { UserOutlined } from '@ant-design/icons';
const { TextArea } = Input;
function SingleComment(props) {
    // const user = useSelector(state => state.user);
    const [CommentValue, setCommentValue] = useState("")
    const [OpenReply, setOpenReply] = useState(false)

    const handleChange = (e) => {
        setCommentValue(e.currentTarget.value)
    }

    const openReply = () => {
        setOpenReply(!OpenReply)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const variables = {
            writer: props.currUser,
            postId: props.postId,
            responseTo: props.comment._id,
            content: CommentValue
        }


        Axios.post('/api/comment/saveComment', variables)
            .then(response => {
                if (response.data.success) {
                    setCommentValue("")
                    setOpenReply(!OpenReply)
                    props.refreshFunction(response.data.result)
                } else {
                    alert('Failed to save Comment')
                }
            })
    }

    const actions = [
        <LikeDislikes author={props.comment.writer._id} commentId={props.comment._id} userId={props.currUser} />,
        <span  style={{bakgroundColor:"yellow",color:"green"}}onClick={openReply} key="comment-basic-reply-to">Reply to </span>
    ]
     console.log(props.comment.writer.username,"yay !")
    return (
        <div>
            <Comment
                actions={actions}
               
                
                author={<a>{props.comment.writer.username}</a>}
                avatar={<Avatar className="wow_avatar" src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                
                content={
                    <p style={{textAlign:"justify"}}>
                        {props.comment.content}
                    </p>
                }
            
            ></Comment>


            {OpenReply &&
                <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                    <TextArea
                        style={{ width: '100%', borderRadius: '5px',marginBottom:'10px' }}
                        onChange={handleChange}
                        value={CommentValue}
                        placeholder="write some comments"
                    />
                    <br />
                    <Button style={{ width: '25%', height: '52px',marginLeft:'10px' }} onClick={onSubmit}>Submit</Button>
                </form>
            }

        </div>
    )
}

export default SingleComment