import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useThemeStore } from '@/context/themeContext'
import Navigation from '@/components/common/Navigation'
import Footer from '@/components/common/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'
import ScrollProgress from '@/components/common/ScrollProgress'
import LoadingScreen from '@/components/common/LoadingScreen'
import Home from '@/pages/Home'
import ProjectDetail from '@/pages/ProjectDetail'
import Blog from '@/pages/Blog'
import NotFound from '@/pages/NotFound'

function AppContent() {
  const { theme } = useThemeStore()
  const location = useLocation()

  useEffect(() => {
    // Apply theme
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    // Update theme color meta tag
    const themeColor = document.querySelector('meta[name="theme-color"]')
    if (themeColor) {
      themeColor.setAttribute('content', theme === 'dark' ? '#0f172a' : '#ffffff')
    }
  }, [theme])

  useEffect(() => {
    // Analytics tracking - scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true)

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <Router>
      <AppContent />
    </Router>
  )
}
