import React, { useState } from 'react'
import { FeedbackView } from './feedback-view'
// TODO move this into deps
import { useAuth } from '../auth'

type Props = {
  title?: string
  onSave?: () => void
}

type Deps = {
  saveFeedback: (userId: string, feedback: string) => Promise<void>
}

type CreateFeedbackViewContainer = (deps: Deps) => React.FC<Props>

export const createFeedbackViewContainer: CreateFeedbackViewContainer = ({
  saveFeedback,
}) => ({ title, onSave = () => {} }) => {
  const { user } = useAuth()

  const handleSubmit = (feedback: string) => {
    saveFeedback(user!.id, feedback)
    onSave()
  }

  return (
    <FeedbackView
      title={title}
      onSubmit={handleSubmit}
    />
  )
}
