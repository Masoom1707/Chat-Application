import React, { useEffect } from 'react'
import { userChatStore } from '../store/chatStore'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import { useAuthStore } from '../store/authStore'
import {formatMessageTime} from '../lib/utils'

const ChatContainer = () => {
  const {message,selectedUser,isMessagesLoading,getUserMessages} = userChatStore()
  const {authUser} = useAuthStore()

  useEffect(() => {
    getUserMessages(selectedUser._id)
  }, [selectedUser._id, getUserMessages])

  if(isMessagesLoading) return <div>Loading Messages...</div>

  return (
    <div className="chat_container " >
      <ChatHeader />
      <div className="message_div">
      {message.map((message) => (
    <div
      key={message._id}
      className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}
    >
      <div className="chat-section">
        <div className="avatar">
          <img
            src={
              message.senderId === authUser._id
                ? authUser.profilepic || "./public/images.png"
                : selectedUser.profilepic || "./public/images.png"
            }
            alt="profile"
          />
        </div>
        <div className="text_msg">
        {message.image && (
         <div className="attachment_div">
           <img
            src={message.image}
            alt="Attachment"
            className="Attachment"
          />
         </div>
        )}
        {message.text && <p className='tex_msg-send'>{message.text}</p>}
        <div className="chat-header">
        <time className="time">
          {formatMessageTime(message.createdAt)}
        </time>
      </div>
      </div>
      </div>
    
    </div>
  ))}
      </div>
      <ChatInput />
    </div>
  )
}

export default ChatContainer