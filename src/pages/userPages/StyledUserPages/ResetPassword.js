import React, {useState} from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import {Button, Card, Col, Form} from 'react-bootstrap';
import {useIntl} from 'react-intl';
import AppRowContainer from '@crema/core/AppRowContainer';
import styles from '../index.module.scss';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import {ReactComponent as Logo} from '../../../assets/user/reset-password.svg';
import clsx from 'clsx';

const ResetPassword = () => {
  const {messages} = useIntl();
  const [validated, setValidated] = useState(false);

  const onSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    console.log('Finish');
    setValidated(true);
  };

  return (
    <div className={clsx(styles.userPages, 'd-flex flex-column')}>
      <AppAnimateGroup type='bottom'>
        <AppPageMetadata title='Reset Password' />
        <div
          className={clsx(
            styles.userContainer,
            'd-flex flex-column align-items-center justify-content-center',
          )}
          key='a'>
          <Card
            className={clsx(
              styles.userCard,
              styles.userCardLg,
              'w-100 overflow-hidden text-center',
            )}>
            <AppRowContainer>
              <Col xs={12} md={6} className={styles.userStyledResetImgCol}>
                <div
                  className={clsx(
                    styles.userStyledImg,
                    'h-auto w-100 d-inline-block',
                  )}>
                  <Logo />
                </div>
              </Col>

              <Col xs={12} md={6}>
                <div
                  className={clsx(
                    styles.userCardHeader,
                    'd-flex align-items-center justify-content-center',
                  )}>
                  <h3>
                    <IntlMessages id='common.resetPassword' />
                  </h3>
                </div>

                <Form
                  className={clsx(styles.userForm, 'mb-0')}
                  name='basic'
                  noValidate
                  validated={validated}
                  onSubmit={onSubmit}>
                  <Form.Group controlId='validationCustom01'>
                    <Form.Control
                      name='oldPassword'
                      placeholder={messages['common.oldPassword']}
                      type='password'
                      className={styles.formField}
                      required
                    />
                    <Form.Control.Feedback
                      type='invalid'
                      className={styles.feedback}>
                      Please input your Old Password!
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId='validationCustom02'>
                    <Form.Control
                      name='newPassword'
                      placeholder={messages['common.newPassword']}
                      type='password'
                      className={styles.formField}
                      required
                    />
                    <Form.Control.Feedback
                      type='invalid'
                      className={styles.feedback}>
                      Please input your New Password!
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId='validationCustom03'>
                    <Form.Control
                      name='confirmPassword'
                      placeholder={messages['common.retypePassword']}
                      type='password'
                      className={styles.formField}
                      required
                    />
                    <Form.Control.Feedback
                      type='invalid'
                      className={styles.feedback}>
                      Please input your Retype Password!
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button type='primary' className='w-100' type='submit'>
                    <IntlMessages id='common.resetMyPassword' />
                  </Button>
                </Form>
              </Col>
            </AppRowContainer>
          </Card>
        </div>
      </AppAnimateGroup>
    </div>
  );
};

export default ResetPassword;
