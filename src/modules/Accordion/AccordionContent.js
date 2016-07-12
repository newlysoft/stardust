import React, { PropTypes } from 'react'
import cx from 'classnames'

import Content from '../../parts/Content'
import META from '../../utils/Meta'
import { useKeyOnly, getUnhandledProps } from '../../utils/propUtils'

function AccordionContent(props) {
  const { active, className }  = props
  const classes = cx(
    useKeyOnly(active, 'active'),
    className
  )

  const rest = getUnhandledProps(AccordionContent, props)

  return (
    <Content {...rest} className={classes}>
      {children}
    </Content>
  )
}

AccordionContent.propTypes = {
  ...Content.propTypes,
  /** Whether or not the content is visible. */
  active: PropTypes.bool,
}

AccordionContent._meta = {
  ...Content._meta,
  name: 'AccordionContent',
  type: META.type.module,
  parent: 'Accordion',
}

export default AccordionContent
