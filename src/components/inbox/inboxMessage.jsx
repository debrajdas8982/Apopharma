import { Avatar, Box } from '@mantine/core'
import { CgArrowLongLeft } from 'react-icons/cg'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import styles from '../../../assets/styles/components/widgets/inboxMessage.module.css'
import { getInitials } from '../../../helpers/utils/helpers'

const InboxMessage = ({ message, setSelectedMessage, deleteMessage }) => {
  return message ? (
    <>
      <Box
        sx={() => ({
          display: 'none',
          '@media (max-width: 600px)': {
            display: 'block'
          }
        })}
      >
        <div className={styles.head}>
          <button
            className={styles['arrow-button']}
            type='button'
            onClick={() => setSelectedMessage(null)}
          >
            <CgArrowLongLeft className={styles.arrow} />
          </button>
          <Avatar
            className={styles.initials}
            color='blue'
            radius='xl'
            size={40}
          >
            {getInitials(message)}
          </Avatar>
          <div className={styles['compact-container']}>
            <div className={styles.from}>
              <p id={styles['from-title']}>From: </p>
              <p id={styles['from-text']}>{message.sender}</p>
            </div>
            <div className={styles.subject}>
              <p id={styles['subject-title']}>Subject: </p>
              <p id={styles['subject-text']}>{message.subject}</p>
            </div>
            <div className={styles.date}>
              <AiOutlineClockCircle className={styles.clock} />
              <p>{message.date}&nbsp;</p>
            </div>
          </div>
        </div>
      </Box>
      <Box
        sx={() => ({
          display: 'none',
          '@media (min-width: 600px)': {
            display: 'block'
          }
        })}
      >
        <div className={styles.head}>
          <button
            className={styles['arrow-button']}
            type='button'
            onClick={() => setSelectedMessage(null)}
          >
            <CgArrowLongLeft className={styles.arrow} />
          </button>
          <Avatar
            className={styles.initials}
            color='blue'
            radius='xl'
            size={40}
          >
            {getInitials(message)}
          </Avatar>
          <div className={styles['from-and-subject-container']}>
            <div className={styles.from}>
              <p id={styles['from-title']}>From: </p>
              <p id={styles['from-text']}>{message.sender}</p>
            </div>
            <div className={styles.subject}>
              <p id={styles['subject-title']}>Subject: </p>
              <p id={styles['subject-text']}>{message.subject}</p>
            </div>
          </div>
          <div className={styles.clock}>
            <AiOutlineClockCircle />
          </div>
          <div className={styles.date}>
            <p>{message.date}&nbsp;</p>
          </div>
        </div>
      </Box>

      <div className={styles['message-container']}>
        <BsTrash
          className={styles.trash}
          onClick={() => deleteMessage(message)}
        />
        <div className={styles['text-container']}>
          <p>{message.text}</p>
        </div>
      </div>
    </>
  ) : null
}

export default InboxMessage
