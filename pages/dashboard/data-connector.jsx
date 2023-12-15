import React from 'react';
import DashboardContainer from '../../components/DashboardContainer';
import DataUploader from '../../components/DataUploader';
import PageHeader from '../../components/PageHeader';

const DataConnectorPage = () => (
    <DashboardContainer>
        <PageHeader
          title="Data Connector"
          description="Integrate your csv or excel files with PostgreSQL databases"
        />
        <DataUploader />
    </DashboardContainer>
  );

export default DataConnectorPage;
