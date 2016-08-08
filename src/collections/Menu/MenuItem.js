import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps, useKeyOnly } from '../../utils/propUtils'

function MenuItem(props) {
  const { active, children, className } = props
  const classes = cx(
    className,
    useKeyOnly(active, 'active'),
    'item',
  )
  const rest = getUnhandledProps(MenuItem, props)

  return <a {...rest} className={classes}>{children}</a>
}

MenuItem._meta = {
  name: 'MenuItem',
  type: META.type.collection,
  parent: 'Menu',
}

MenuItem.propTypes = {
  /** A menu item can be active. */
  active: PropTypes.bool,

  /** Primary content of the MenuItem. */
  children: PropTypes.node,

  /** Classes that will be added to the MenuItem className. */
  className: PropTypes.string,
}

export default MenuItem
