import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const FeedContentExamples = () => {
  return (
    <ExampleSection title='Content'>
      <ComponentExample
        title='Label'
        description='An event can contain an image or icon label.'
        examplePath='views/Feed/Content/LabelImage'
      />
      <ComponentExample examplePath='views/Feed/Content/LabelIcon' />

      <ComponentExample
        title='Date'
        description='An event or an event summary can contain a date.'
        examplePath='views/Feed/Content/Date'
      />
      <ComponentExample examplePath='views/Feed/Content/DateSummary' />
    </ExampleSection>
  )
}

export default FeedContentExamples
