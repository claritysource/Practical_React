import React, { useEffect, useState } from 'react';
import SpinnerWithBackdrop from './SpinnerWithBackdrop'

const Solution = () => {
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    if (busy) {
      setTimeout(() => {
        setBusy(false)
      }, 2000)
    }
  }, [busy, setBusy])

  return (
    <SpinnerWithBackdrop condition={busy}>
      <div>
        <button
          onClick={() => setBusy(true)}>
            Show Spinner for two seconds
        </button>
      </div>
    </SpinnerWithBackdrop>
  )
}

export default Solution;