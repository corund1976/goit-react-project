import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Section from 'components/Section';
import PageTitle from 'components/PageTitle';
import AuthForm from 'components/AuthForm';
import ErrorModal from 'components/Modal/ErrorModal';
import Loading from 'components/Loading';


import { getErrorMessage } from 'redux/error/errorSelector';
import { getLoaderStatus } from 'redux/loader/loaderSelector';

import s from './AuthPage.module.css';

function AuthPage() {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const errorMessage = useSelector(getErrorMessage);
  const isLoading = useSelector(getLoaderStatus);

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

      {/* {showErrorModal && (
        <ErrorModal toggleErrorModal={toggleErrorModal}>
          <p>{errorMessage}</p>
        </ErrorModal>
      )} */}

    </Section>
  );
}

export default AuthPage;
