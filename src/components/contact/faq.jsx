import React from 'react'
import { Accordion, Group, Text } from '@mantine/core'
import { BsChevronDown } from 'react-icons/bs'
import styles from '../../assets/styles/components/faq.module.css'

function AccordionLabel({ label, description }) {
  return (
    <Group noWrap>
      <div className={styles['accordion-label-box']}>
        <div>
          <Text className={styles['accordion-label-label']}>{label}</Text>
          <div className={styles['accordion-under-label']} />
        </div>
        <div>
          <Text className={styles['accordion-label-desc']}>{description}</Text>
        </div>
      </div>
    </Group>
  )
}

const Faq = () => {
  const faqDummyData = [
    {
      text: 'A frequently asked questions (FAQ) list is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of a FAQ is generally to provide information on frequent questions or concerns; however, the format is a useful means of organizing information, and text consisting of questions and their answers may thus be called a FAQ regardless of whether the questions are actually frequently asked.',
      title: 'What does FAQ mean?'
      // date: '2022-02-25'
    },
    {
      text: 'A QR code is an individual, unique code that stores a small amount of data that can be accessed by scanning an image. Each QR code carries an instruction, which could be anything from opening a website or data to WiFi passwords, credit card or login information.',
      title: 'What is a QR code?'
      // date: '2022-02-25'
    },
    {
      text: 'Open the camera app .Focus the camera on the QR code by gently tapping the code .Follow the instructions on the screen to complete the action',
      title: 'How to scan QR codes?'
      // date: '2022-02-27'
    },
    {
      text: 'No need to download an app that will just take up space on your phone; you can use the built-in camera on your iPhone or Android device with Bixby enabled. Here’s more:',
      title: 'Want to scan a QR code? '
      // date: '2022-02-28'
    },
    {
      text: 'Open the camera app on your iPhone, then point it at the QR code you want to open.At the top of the screen, there will be a notification alerting you of the source of the page - if you click this, it will take you to the page.',
      title: 'Scan QR code on iPhone'
      // date: '2022-02-27'
    },
    {
      text: 'Open the Bixby-enabled camera app on your Android (sometimes called Bixby Vision), then point it at the QR code you’d like to open.',
      title: 'Scan QR code on Android'
      // date: '2022-02-27'
    },
    {
      text: 'Once your camera views the code, it will automatically read and complete the action.',
      title: 'Android bixby scan qr code'
      // date: '2022-02-27'
    }
  ]

  return (
    <div>
      <h3 className={styles['faq-heading']}>FAQ</h3>
      <Accordion iconPosition='right' icon={<BsChevronDown size='40' />}>
        {faqDummyData.length
          ? faqDummyData.map((i, key) => {
              const keyNr = key

              return (
                <Accordion.Item
                  key={keyNr}
                  label={
                    <AccordionLabel label={i.title} description={i.date} />
                  }
                >
                  <div className={styles['faq-text']}>{i.text}</div>
                </Accordion.Item>
              )
            })
          : ''}
      </Accordion>
    </div>
  )
}

export default Faq
