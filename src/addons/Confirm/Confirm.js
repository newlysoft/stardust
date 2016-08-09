import React, { PropTypes } from 'react'

import Button from '../../elements/Button/Button'
import Modal from '../../modules/Modal/Modal'
import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

/**
 * A Confirm modal gives the user a choice to confirm or cancel an action.
 * @see Modal
 */
function Confirm(props) {
  const { active, cancelLabel, confirmLabel, header, content, onConfirm, onCancel } = props
  const rest = getUnhandledProps(Confirm, props)

  return (
    <Modal active={active} size='small' {...rest}>
      {header && <Modal.Header>{header}</Modal.Header>}
      {content && <Modal.Content><p>{content}</p></Modal.Content>}
      <Modal.Actions>
        <Button onClick={onCancel}>{cancelLabel}</Button>
        <Button className='primary' onClick={onConfirm}>{confirmLabel}</Button>
      </Modal.Actions>
    </Modal>
  )
}

Confirm._meta = {
  name: 'Confirm',
  type: META.type.addon,
}

Confirm.propTypes = {
  /** Whether or not the modal is visible */
  active: PropTypes.bool,

  /** The cancel button text */
  cancelLabel: PropTypes.string,

  /** The OK button text */
  confirmLabel: PropTypes.string,

  /** The ModalHeader text */
  header: PropTypes.string,

  /** The ModalContent text */
  content: PropTypes.string,

  /** Called when the OK button is clicked */
  onConfirm: PropTypes.func,

  /** Called when the Cancel button is clicked */
  onCancel: PropTypes.func,
}

Confirm.defaultProps = {
  cancelLabel: 'Cancel',
  confirmLabel: 'Yes',
  header: 'Are you sure?',
}

export default Confirm
