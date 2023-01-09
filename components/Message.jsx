import React from 'react';
import styles from '../styles/chat.module.css';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Image from 'next/image';

const Message = ({ own, type }) => {
  return (
    <div
      className={
        own
          ? styles.message_container_main + ' ' + styles.own_message
          : styles.message_container_main
      }
    >
      {type === 1 ? (
        <div className={styles.message_bx}>
          <div className={styles.inner_message_text}>
            <p>Hi , how are you ?</p>
            <label></label>
          </div>
          <div className={styles.message_info_bx}>
            <p>12:45</p>
            {own && (
              <div className={styles.Read_message_info}>
                <div>
                  <DoneAllIcon />
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.messae_bx_img}>
          <Image
            src="https://i.pinimg.com/736x/88/0e/8b/880e8b01f6c50a110ead68d020ae88bb.jpg"
            alt="userImg"
            height="100%"
            width="100%"
          />
          <div className={styles.message_info_bx}>
            <p>12:45</p>
            {own && (
              <div className={styles.Read_message_info}>
                <div>
                  <DoneAllIcon />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className={styles.message_react_dot}>
        <label>
          <EmojiEmotionsIcon />
        </label>
      </div>
    </div>
  );
};

export default Message;
