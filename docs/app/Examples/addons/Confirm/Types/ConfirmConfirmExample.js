import React, { Component } from 'react'
import { Button, Confirm } from 'stardust'

class ConfirmConfirmExample extends Component {
  state = { active: false }

  show = () => this.setState({ active: true })
  handleConfirm = () => this.setState({ active: false })
  handleCancel = () => this.setState({ active: false })

  render() {
    const { active, result } = this.state

    return (
      <div>
        <Button onClick={this.show}>Show</Button>
        <Confirm
          active={active}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </div>
    )
  }
}

export default ConfirmConfirmExample
