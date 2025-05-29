"use client"

import { useState, useEffect } from "react"

export function useCurrentDate() {
  const [formattedDate, setFormattedDate] = useState("")

  useEffect(() => {
    const now = new Date()
    const day = String(now.getDate()).padStart(2, "0")
    const month = String(now.getMonth() + 1).padStart(2, "0")
    const year = now.getFullYear()
    setFormattedDate(`${day}/${month}/${year}`)
  }, [])

  return formattedDate
}
