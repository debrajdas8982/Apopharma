import { FiSearch } from 'react-icons/fi'
import styles from '../../../assets/styles/components/widgets/inboxSearch.module.css'

const InboxSearch = ({ setQuery }) => {
  return (
    <div className={styles['search-input-container']}>
      <input
        className={styles['search-input']}
        placeholder='Search...'
        onInput={(e) => {
          setQuery(e.target.value)
        }}
      />
      <FiSearch size={24} className={styles.icon} />
    </div>
  )
}
export default InboxSearch
