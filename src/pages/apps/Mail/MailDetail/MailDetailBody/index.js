import React from 'react';
import {useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {onUpdateSelectedMail} from '../../../../../redux/actions/MailApp';
import PropTypes from 'prop-types';
import MessageItem from './MessageItem';
import styles from '../index.module.scss';

const MailDetailBody = (props) => {
  const {selectedMail} = props;
  const dispatch = useDispatch();

  const onSubmitMail = (message, index) => {
    let messages = selectedMail.messages;
    messages.splice(index + 1, 0, message);
    selectedMail.messages = messages;
    dispatch(onUpdateSelectedMail(selectedMail));
  };

  const onChangeStarred = (message, isStarred) => {
    message.isStarred = isStarred;
    selectedMail.messages = selectedMail.messages.map((data) =>
      data.messageId === message.messageId ? message : data,
    );
    dispatch(onUpdateSelectedMail(selectedMail));
  };

  return (
    <div className='p-4'>
      {selectedMail ? (
        <div className={styles.mailDetailBodyContent}>
          {selectedMail.messages.map((message, index) => (
            <MessageItem
              key={index}
              index={index}
              mailLength={selectedMail.messages.length}
              message={message}
              onSubmitMail={onSubmitMail}
              onChangeStarred={onChangeStarred}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default withRouter(MailDetailBody);

MailDetailBody.propTypes = {
  selectedMail: PropTypes.object.isRequired,
};
