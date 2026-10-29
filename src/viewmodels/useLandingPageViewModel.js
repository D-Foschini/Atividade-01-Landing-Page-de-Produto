import { useCallback, useEffect, useRef, useState } from 'react'

export function useLandingPageViewModel() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState(0)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const checkoutTimer = useRef(null)

  useEffect(() => () => window.clearTimeout(checkoutTimer.current), [])

  useEffect(() => {
    if (!success) return undefined
    const timer = window.setTimeout(() => setSuccess(false), 5000)
    return () => window.clearTimeout(timer)
  }, [success])

  const openCheckout = useCallback(() => {
    setMenuOpen(false)
    setSuccess(false)
    setCheckoutOpen(true)
  }, [])

  const closeCheckout = useCallback(() => {
    window.clearTimeout(checkoutTimer.current)
    checkoutTimer.current = null
    setCheckoutOpen(false)
    setCheckoutLoading(false)
  }, [])

  const submitCheckout = (event) => {
    event.preventDefault()
    if (!checkoutOpen || checkoutTimer.current !== null || !event.currentTarget.reportValidity()) return
    setCheckoutLoading(true)
    checkoutTimer.current = window.setTimeout(() => {
      checkoutTimer.current = null
      setCheckoutLoading(false)
      setCheckoutOpen(false)
      setSuccess(true)
    }, 900)
  }

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const toggleFaq = (index) => {
    setActiveFaq((current) => (current === index ? -1 : index))
  }

  return {
    menuOpen,
    activeFaq,
    checkoutOpen,
    checkoutLoading,
    success,
    toggleMenu: () => setMenuOpen((current) => !current),
    closeMenu,
    toggleFaq,
    openCheckout,
    closeCheckout,
    submitCheckout,
  }
}
