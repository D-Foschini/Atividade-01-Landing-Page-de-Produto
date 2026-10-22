import { useEffect, useState } from 'react'

export function useLandingPageViewModel() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState(0)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!success) return undefined
    const timer = window.setTimeout(() => setSuccess(false), 5000)
    return () => window.clearTimeout(timer)
  }, [success])

  const openCheckout = () => {
    setMenuOpen(false)
    setCheckoutOpen(true)
  }

  const closeCheckout = () => {
    setCheckoutOpen(false)
    setCheckoutLoading(false)
  }

  const submitCheckout = (event) => {
    event.preventDefault()
    setCheckoutLoading(true)
    window.setTimeout(() => {
      setCheckoutLoading(false)
      setCheckoutOpen(false)
      setSuccess(true)
    }, 900)
  }

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
    closeMenu: () => setMenuOpen(false),
    toggleFaq,
    openCheckout,
    closeCheckout,
    submitCheckout,
  }
}
