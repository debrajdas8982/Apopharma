/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from 'react'
import { Input, Textarea, Button } from '@mantine/core'
import { useForm } from 'react-hook-form'
import styleSupport from '../../assets/styles/components/support.module.css'
import style from '../../assets/styles/components/feedback.module.css'
// import useFeedback from '../helpers/hooks/useFeedback'
// import useCreateSupport from '../helpers/hooks/useSupport'
// eslint-disable-next-line import/no-cycle
import ThankYou from './thankYou'
import StarRating from '../interactive/starRating'
import buttonStyle from '../core/buttonStyle'

const FeedbackForm = ({ type }) => {
  const [currentForm, setActive] = useState()
  const [rating, setRating] = useState()
  const { handleSubmit, register } = useForm()
  const [submited, setSubmit] = useState(false)
  // const {
  //   newFeedbackTicket,
  //   isLoading: loading,
  //   isError: error
  // } = useFeedback()
  // const { newSupportTicket, isLoading, isError } = useCreateSupport()
  useEffect(() => {
    setActive(type)
  }, [type])

  const onSubmit = () => {
    if (currentForm === 'support') {
      // console.log(data)
      // newSupportTicket(data)
      setSubmit(true)
    }
    if (currentForm === 'feedback') {
      // console.log(data)
      // newFeedbackTicket(data)
      setSubmit(true)
    }
  }

  const feedbackInput = (
    <>
      <h5 className={style['feedback-heading']}>
        1. How has your experience been so far?
      </h5>
      <Textarea
        minRows={2}
        className={style['feedback-details']}
        {...register('addRemoveFeatures')}
        placeholder='Enter your message here..'
        required
      />
      <h5 className={style['feedback-heading']}>
        2. Are there any features you would love us to add or remove to ease
        your work?
      </h5>
      <Textarea
        minRows={8}
        className={style['feedback-details']}
        {...register('experienceSoFar')}
        placeholder='Enter your message here'
        required
      />
      <h5 className={style['feedback-heading']} htmlFor='case'>
        3. Is the app easy to use?
      </h5>
      <p className={style['feedback-text']}>
        1=Strongly Disagree, 5=Strongly Agree
      </p>
      <div className={style['feedback-star']}>
        <StarRating name='case-rating' rating={rating} setRating={setRating} />
      </div>
    </>
  )

  const supportInput = (
    // eslint-disable-next-line react/jsx-key
    <div className={styleSupport.support}>
      <div className={styleSupport['support-greeting']}>
        <h5>Hi, we are here to help! </h5>
        <p>Please explain the problem you are having.</p>
      </div>
      <div className={styleSupport['subject-text']}>
        <h5> Subject </h5>
      </div>
      <div className={styleSupport['subject-box']}>
        <Input
          className={styleSupport['subject-input']}
          {...register('subject')}
          placeholder='Enter your subject here ...'
          required
        />
        <Textarea
          minRows={10}
          className={styleSupport['subject-details']}
          {...register('subjectMSG')}
          placeholder='Enter your message here...'
          required
        />
      </div>
    </div>
  )

  const formAsContact = (submit, input) => {
    return (
      <form onSubmit={handleSubmit(submit)}>
        {/* <p>Something went wrong please try again</p> : null} */}
        {input}
        <Button sx={buttonStyle} type='submit'>
          {' '}
          Send
        </Button>
      </form>
      // ) : (
      //   <Loader size={50} />
    )
  }

  return !submited ? (
    <>
      {currentForm === 'support' && formAsContact(onSubmit, supportInput)}
      {currentForm === 'feedback' && formAsContact(onSubmit, feedbackInput)}
    </>
  ) : (
    <ThankYou value={currentForm} />
  )
}

export default FeedbackForm
