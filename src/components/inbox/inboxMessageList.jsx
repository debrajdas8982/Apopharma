/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { Center } from '@mantine/core'
import InboxMessagePreview from './InboxMessagePreview'
import filterMessages from '../../../helpers/utils/filter'

const InboxMessageList = ({
  messageData,
  setSelectedMessage,
  query,
  selectedMessage
}) => {
  const [filteredMessages, setFilteredMessages] = useState(false)

  useEffect(() => {
    if (messageData) {
      setFilteredMessages(filterMessages(messageData, query))
    }
    if (_.isEmpty(messageData)) {
      setFilteredMessages(filterMessages(messageData, query))
    }
  }, [messageData, query])

  return !_.isEmpty(messageData) && filteredMessages ? (
    filteredMessages.map((message) => {
      return (
        <InboxMessagePreview
          message={message}
          setSelectedMessage={setSelectedMessage}
          key={message.id}
          selectedMessage={selectedMessage}
        />
      )
    })
  ) : (
    <Center> You have no messages</Center>
  )
}
export default InboxMessageList
