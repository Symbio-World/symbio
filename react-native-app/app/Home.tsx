import React from 'react'
import useSWR from 'swr'
import { useAuth } from './auth'
import { fetchPrinciples } from './principle'
import { ScanBarcodeViewContainer } from './barcode'
import { Loading } from './ui-kit/Loading'
import { SetupPrinciplesViewContainer } from './principle'

export const Home: React.FC = () => {
  const { user } = useAuth()
  const { data: principles, isValidating: isLoading, mutate } = useSWR<
    string[] | null
  >(user ? user.id : null, fetchPrinciples)

  if (!user || (!principles && isLoading)) return <Loading />

  if (!principles) return <SetupPrinciplesViewContainer onSave={mutate} />

  return <ScanBarcodeViewContainer />
}