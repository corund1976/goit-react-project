// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import Section from 'components/Section';
import Balance from 'components/Balance';
import GoReports from 'components/GoReports';
import TransactionForm from 'components/TransactionForm';
import TransactionTable from 'components/TransactionTable';
import Summary from 'components/Summary';

// import s from './IncomePage.module.css';

function IncomePage() {
  return (
    <Section>
      <div>
        <Balance />
        <GoReports />
      </div>

      <TransactionForm />
      
      <div>
        <TransactionTable />
        <Summary />
      </div>
    </Section>
  );
}

export default IncomePage;