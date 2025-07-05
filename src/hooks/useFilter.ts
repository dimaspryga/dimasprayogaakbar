"use client"

import * as React from "react"

export function useFilter<T>(items: T[], filterFn: (item: T, filter: string) => boolean, initialFilter = "All") {
  const [filter, setFilter] = React.useState(initialFilter)

  const filteredItems = React.useMemo(() => {
    if (filter === "All") return items
    return items.filter((item) => filterFn(item, filter))
  }, [items, filter, filterFn])

  return React.useMemo(() => ({ filter, setFilter, filteredItems }), [filter, filteredItems])
}
