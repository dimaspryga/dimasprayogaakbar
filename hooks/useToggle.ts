"use client"

import * as React from "react"

export function useToggle(initialValue = false) {
  const [value, setValue] = React.useState(initialValue)

  const toggle = React.useCallback(() => setValue((prev) => !prev), [])
  const setTrue = React.useCallback(() => setValue(true), [])
  const setFalse = React.useCallback(() => setValue(false), [])

  return React.useMemo(() => ({ value, toggle, setTrue, setFalse, setValue }), [value, toggle, setTrue, setFalse])
}
