import React from 'react'
import { Button, CogIcon, NotificationDot, useModal } from 'uikit'
import { useExpertModeManager } from 'state/user/hooks'
import SettingsModal from './SettingsModal'

export default function SettingsTab() {
  const [onPresentSettingsModal] = useModal(<SettingsModal />)
  const [expertMode] = useExpertModeManager()

  return (
    <NotificationDot show={expertMode}>
      <Button variant="text" p={0} onClick={onPresentSettingsModal} id="open-settings-dialog-button">
        <CogIcon color="primary" width="32px" />
      </Button>
    </NotificationDot>
  )
}
