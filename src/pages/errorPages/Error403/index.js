import React from 'react';
import {useHistory} from 'react-router-dom';
import IntlMessages from '@crema/utility/IntlMessages';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import '../index.style.scss';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import {ReactComponent as Logo} from '../../../assets/icon/403.svg';
import {Button} from 'react-bootstrap';

const Error403 = () => {
  const history = useHistory();

  const onGoBackToHome = () => {
    history.goBack();
  };

  return (
    <AppAnimateGroup type='bottom'>
      <AppPageMetadata title='Unauthorized' />
      <div className='error-container' key='a'>
        <div className='error-img'>
          <Logo />
        </div>
        <div className='error-content'>
          <h3>Unauthorized</h3>
          <div className='error-para'>
            <p className='mb-0'>This page is under construction!</p>
            {/* {"You are not authorized for this page"} */}
          </div>
          <Button type='primary' className='error-btn' onClick={onGoBackToHome}>
            <IntlMessages id='error.goBackToHome' />
          </Button>
        </div>
      </div>
    </AppAnimateGroup>
  );
};

export default Error403;
