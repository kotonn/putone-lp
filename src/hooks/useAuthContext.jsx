import React, { createContext, useState, useContext, useEffect } from 'react'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import PropTypes from 'prop-types'

const AuthContext = createContext()

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const value = {
    user,
    loading,
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
