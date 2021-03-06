// @flow
import React from 'react'
import { FormattedMessage } from 'react-intl'

import Button from '../../components/Button'
import LoginIcon from '../../assets/icons/login.svg'
import styles from '../Home/Home.scss'
import TextInput from '../../components/Inputs/TextInput'

type Props = {
  watchOnlyLogin: (content: string) => void,
}

type State = {
  address: string,
}

export default class LoginPrivateKey extends React.Component<Props, State> {
  state = {
    address: '',
  }

  render = () => {
    const { watchOnlyLogin } = this.props
    const { address } = this.state

    return (
      <div id="loginPrivateKey" className={styles.flexContainer}>
        <form
          onSubmit={e => {
            e.preventDefault()
            watchOnlyLogin(address)
          }}
        >
          <React.Fragment>
            <div className={styles.centeredInput}>
              <FormattedMessage id="authWatchPlaceholder">
                {translation => (
                  <TextInput
                    placeholder={translation}
                    value={address}
                    onChange={(e: Object) =>
                      this.setState({ address: e.target.value })
                    }
                    autoFocus
                  />
                )}
              </FormattedMessage>
            </div>
            <div className={styles.loginButtonRow}>
              <Button
                id="loginButton"
                primary
                type="submit"
                renderIcon={LoginIcon}
                disabled={address.length < 10}
              >
                <FormattedMessage id="authLogin" />
              </Button>
            </div>
          </React.Fragment>
        </form>
      </div>
    )
  }
}
