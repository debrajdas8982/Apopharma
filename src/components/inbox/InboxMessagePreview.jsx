import { Avatar /* , Group, Text, Titl */ } from '@mantine/core'
import styles from '../../../assets/styles/components/widgets/inboxMessagePreview.module.css'
import {
  getInitials,
  readMsg,
  truncateString
} from '../../../helpers/utils/helpers'
import useMessages from '../../../helpers/hooks/useMessages'

const InboxMessagePreview = ({
  message,
  setSelectedMessage,
  selectedMessage
}) => {
  const { readMsg: read } = useMessages()

  const openMessage = () => {
    if (message.hasBeenRead === false) {
      read(message.id).then(readMsg(message))
    }
    setSelectedMessage(message)
  }
  return (
    <div
      className={`${styles['message-preview']} 
        ${
          message.hasBeenRead
            ? styles['message-read']
            : styles['message-not-read']
        }
        ${
          selectedMessage &&
          selectedMessage.id === message.id &&
          styles['message-selected']
        }`}
      key={message.id}
      onClick={() => openMessage()}
      onKeyDown={() => openMessage()}
      role='button'
      tabIndex={0}
    >
      <Avatar color='blue' radius='xl' size={48} id={styles.initials}>
        {getInitials(message)}
      </Avatar>
      <div className={styles['message-body']}>
        <p id={styles.title} order={5}>
          {' '}
          {message?.subject}
        </p>
        {message.hasBeenRead ? (
          <p id={styles.text}>{truncateString(message?.text)}</p>
        ) : (
          <p id={styles.text} style={{ fontWeight: 600 }}>
            Unread text message ...
          </p>
        )}
      </div>
      <div className={styles['message-date']}>
        <p>{message.date}</p>
      </div>
    </div>
  )
}

export default InboxMessagePreview
