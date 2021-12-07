import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Section from 'components/Section';
import PageTitle from 'components/PageTitle';
import AuthForm from 'components/AuthForm';
import ErrorModal from 'components/Modal/ErrorModal';
import Loading from 'components/Loading';


import { errorSelectors } from 'redux/error';
import { loaderSelector } from 'redux/loader';

import s from './AuthPage.module.css';

function AuthPage() {
  const errorMessage = useSelector(errorSelectors.getErrorMessage);
  const isLoading = useSelector(loaderSelector.getLoaderStatus);
  
  const [showErrorModal, setShowErrorModal] = useState(false);

  const toggleErrorModal = () => setShowErrorModal((prevState) => !prevState);

  useEffect(() => {
    if (errorMessage !== null) {
      setShowErrorModal(true);
    }
  }, [errorMessage]);

  return (
    <Section>
      <div className={s.authPage}>

        {isLoading && <Loading />}
        
        <PageTitle />
        <AuthForm />
      </div>

      {showErrorModal && (
        <ErrorModal toggleErrorModal={toggleErrorModal}>
          <p>{errorMessage}</p>
        </ErrorModal>
      )}

    </Section>
  );
}

export default AuthPage;
