/* eslint-disable react/display-name */
import { MdSearch } from 'react-icons/md'
import { Input } from '@mantine/core'

const HasSearch = ({ search, query }) => {
  const setQ = (e) => {
    search(e.target.value)
  }

  return (
    <Input
      placeholder='search..'
      autoFocus
      value={query}
      variant='filled'
      radius={0}
      rightSection={<MdSearch />}
      name='search'
      onChange={(e) => {
        setQ(e)
      }}
      autoComplete='off'
    />
  )
}

export default HasSearch
