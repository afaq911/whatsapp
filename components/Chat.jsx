import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/chat.module.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import InsertEmoticonSharpIcon from '@mui/icons-material/InsertEmoticonSharp';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Conversation from './Conversation';
import SendBtn from './SendBtn';
import Message from './Message';
import EmojiPicker from 'emoji-picker-react';
import Nodata from './Nodata';

const Chat = () => {
  const [CurrentCon, setCurrentCon] = useState();
  const [conversations, setConversations] = useState([1, 2, 3]);
  const [searchFilter, setSerachFilter] = useState();
  const [EmojiPopup, setEmojiPopup] = useState(false);
  const [message, setmessage] = useState();
  const Input_ref = useRef();

  const GetConversation = (val) => {
    setCurrentCon(val);
  };

  const HandleEmoji = (val) => {
    const ref = Input_ref.current;
    const start = message?.substring(0, ref.selectionStart);
    const end = message?.substring(ref.selectionStart);
    const text = start + val.emoji + end;
    message ? setmessage(text) : setmessage(val.emoji);
    setEmojiPopup(!EmojiPopup);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner_chat_container}>
        <div className={styles.chat_conversation_container}>
          <div className={styles.inner_chat_conversation_header}>
            <div className={styles.user_image}>
              <Image
                src="https://i.pinimg.com/736x/88/0e/8b/880e8b01f6c50a110ead68d020ae88bb.jpg"
                alt="userImg"
                height="100%"
                width="100%"
              />
            </div>
            <div className={styles.conversation_header_options}>
              <label>
                <InsertCommentIcon />
              </label>
              <label>
                <MoreVertIcon />
              </label>
            </div>
          </div>
          <div className={styles.search_conversation_container}>
            <div className={styles.search_input}>
              <label>
                <SearchIcon />
              </label>
              <input type="text" placeholder="Search or start new chat" />
            </div>
            <label
              className={
                searchFilter
                  ? styles.search_filter + ' ' + styles.active
                  : styles.search_filter
              }
              onClick={() => setSerachFilter(!searchFilter)}
            >
              <FilterListIcon />
            </label>
          </div>
          <div className={styles.chat_main_conversations_container}>
            <div className={styles.chat_inner_conversations}>
              {conversations?.map((item) => {
                return (
                  <Conversation item={item} GetConversation={GetConversation} />
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.chat_container_messages}>
          {CurrentCon ? (
            <div className={styles.chat_inner_messages}>
              <div className={styles.chat_header_messages}>
                <div className={styles.header_msgs_user_profile}>
                  <div className={styles.message_header_profile_img}>
                    <Image
                      src="https://i.pinimg.com/736x/88/0e/8b/880e8b01f6c50a110ead68d020ae88bb.jpg"
                      alt="userImg"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div className={styles.message_header_profile_info}>
                    <h2>Afaq Haider</h2>
                  </div>
                </div>
                <div className={styles.message_header_cta}>
                  <label>
                    <SearchIcon />
                  </label>
                  <label>
                    <MoreVertIcon />
                  </label>
                </div>
              </div>
              <div className={styles.main_message_tab_display}>
                <div className={styles.inner_messages_tab_display}>
                  <Message type={1} />
                  <Message type={2} />
                  <Message own={true} type={2} />
                  <Message type={1} />
                  <Message own={true} type={2} />
                </div>
                <div className={styles.message_send_bx}>
                  <div className={styles.chat_message_send_cta}>
                    {EmojiPopup && (
                      <div className={styles.emoji_picker}>
                        <EmojiPicker
                          onEmojiClick={HandleEmoji}
                          emojiStyle="facebook"
                        />
                      </div>
                    )}
                    <label
                      className={
                        EmojiPopup
                          ? styles.message_cta_bts +
                            ' ' +
                            styles.active_message_cta
                          : styles.message_cta_bts
                      }
                      onClick={() => setEmojiPopup(!EmojiPopup)}
                    >
                      <InsertEmoticonSharpIcon />
                    </label>
                    <label
                      className={
                        styles.message_cta_bts + ' ' + styles.attachment
                      }
                    >
                      <AttachFileIcon />
                    </label>
                  </div>
                  <div className={styles.send_message_bx_inner}>
                    <input
                      ref={Input_ref}
                      type="text"
                      placeholder="Type a message"
                      value={message}
                      onChange={(e) => setmessage(e.target.value)}
                    />
                    <label>
                      <SendBtn />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Nodata />
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
