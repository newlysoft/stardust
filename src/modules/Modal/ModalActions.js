import React, { PropTypes } from 'react'
import classNames from 'classnames'
import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

function ModalActions(props) {
  const { children, className } = props

  const classes = classNames(
    className,
    'actions'
  )

  const rest = getUnhandledProps(ModalActions, props)

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

ModalActions._meta = {
  name: 'ModalActions',
  type: META.type.module,
  parent: 'Modal',
}

ModalActions.propTypes = {
  /** Primary content of the modal actions */
  children: PropTypes.any,

  /** Classes to add to the modal actions className */
  className: PropTypes.string,
}

export default ModalActions
