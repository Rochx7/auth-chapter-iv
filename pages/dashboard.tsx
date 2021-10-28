import { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { setupApiClient } from '../services/api'
import { api } from '../services/apiClient'
import { withSSRAuth } from '../utils/withSSRAuth'

export default function dashboard() {
  const { user } = useContext(AuthContext)

  useEffect(() => {
    api
      .get('/me')
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <h1>Dashboard</h1>
      <strong>Email: {user?.email} 👨‍🚀</strong>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx)
  const response = await apiClient.get('/me')

  console.log(response)

  return {
    props: {}
  }
})
