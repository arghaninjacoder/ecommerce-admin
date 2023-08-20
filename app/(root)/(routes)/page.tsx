"use client"

import { useEffect } from "react"

import { useStoreModal } from "@/hooks/use-store-modal"

// changing initial page to client component as using modal

export default function SetupPage() {
  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)

  useEffect(() => {
    if (!isOpen) {
      // this will always keep the modal open
      onOpen()
    }
  }, [isOpen, onOpen])

  return null
}
