import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles/chat.module.css';

const Conversation = ({ item, GetConversation }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.conversation}
      onClick={() => GetConversation(item)}
    >
      <div className={styles.conversation_img}>
        <div className={styles.inner_container_img}>
          <Image
            src="https://i.pinimg.com/736x/88/0e/8b/880e8b01f6c50a110ead68d020ae88bb.jpg"
            alt="userImg"
            height="100%"
            width="100%"
          />
        </div>
      </div>
      <div className={styles.conversation_details}>
        <div className={styles.conversation_user_info}>
          <h2>Afaq Haider</h2>
          <p>10:45</p>
        </div>
        <div className={styles.conversation_messages_info}>
          <p>Lorem ipsum dolor sit amet.</p>
          {/* <label className={styles.unread_messages}>1</label> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Conversation;
