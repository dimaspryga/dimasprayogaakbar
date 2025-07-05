"use client"

import * as React from "react"

export function useFormData<T extends Record<string, any>>(initialData: T) {
  const [data, setData] = React.useState<T>(initialData)

  const updateField = React.useCallback((field: keyof T, value: any) => {
    setData((prev) => ({ ...prev, [field]: value }))
  }, [])

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      updateField(name, value)
    },
    [updateField],
  )

  const reset = React.useCallback(() => setData(initialData), [initialData])

  return React.useMemo(
    () => ({ data, updateField, handleChange, reset, setData }),
    [data, updateField, handleChange, reset],
  )
}
