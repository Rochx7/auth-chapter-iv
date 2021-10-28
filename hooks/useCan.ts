import { useContext } from 'react'
import { validatePermissions } from '../utils/validateUserPermissions'
import { AuthContext } from './../contexts/AuthContext'

type UseCanParams = {
  permissions?: string[]
  roles?: string[]
}

export function useCan({ permissions, roles }: UseCanParams) {
  const { user, isAuthenticated } = useContext(AuthContext)

  if (!isAuthenticated) {
    return false
  }

  const userHasValidPermissions = validatePermissions({
    user,
    permissions,
    roles
  })

  return userHasValidPermissions
}
