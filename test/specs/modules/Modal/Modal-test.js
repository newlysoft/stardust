import React from 'react'

import Modal from 'src/modules/Modal/Modal'
import ModalHeader from 'src/modules/Modal/ModalHeader'
import ModalContent from 'src/modules/Modal/ModalContent'
import ModalActions from 'src/modules/Modal/ModalActions'
import ModalDescription from 'src/modules/Modal/ModalDescription'
import * as common from 'test/specs/commonTests'

describe('Modal', () => {
  common.isConformant(Modal)
  common.hasUIClassName(Modal)
  common.rendersChildren(Modal)
  common.hasSubComponents(Modal, [ModalHeader, ModalContent, ModalActions, ModalDescription])

  common.propKeyOnlyToClassName(Modal, 'active')
  common.propKeyOnlyToClassName(Modal, 'basic')
  common.propKeyOnlyToClassName(Modal, 'fullscreen')
  common.propValueOnlyToClassName(Modal, 'size')

  it('renders a <div /> element', () => {
    shallow(<Modal />)
      .should.have.tagName('div')
  })
})
