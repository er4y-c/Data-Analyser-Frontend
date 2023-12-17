import React from 'react'
import { useParams } from 'next/navigation'
import DashboardContainer from '../../../components/DashboardContainer'

const ModelPage = () => {
 const { modelName } = useParams()
  return (
    <DashboardContainer>{ modelName }</DashboardContainer>
  )
}

export default ModelPage;
