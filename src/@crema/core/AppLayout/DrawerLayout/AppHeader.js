import React from 'react';
import styles from './index.module.scss';
import AppLogo from '../components/AppLogo';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import AppHeaderMessages from '../../AppHeaderMessages';
import AppNotifications from '../../AppNotifications';
import PropTypes from 'prop-types';
import {FiMoreVertical} from 'react-icons/fi';
import {AiOutlineMenu} from 'react-icons/ai';
import AppSearch from "../../AppSearchBar";
import {Dropdown} from "react-bootstrap";
import clsx from "clsx";
import AppIconBtn from "../../AppIconBtn";

const AppHeader = ({showDrawer}) => {

  return (
    <div className={styles.appDrawerLayoutHeader}>
      <a className={styles.trigger} onClick={showDrawer}>
        <AiOutlineMenu />
      </a>
      <AppLogo />
      <div className='flex-grow-1' />
      <div className='me-2 me-md-4'>
        <AppSearch />
      </div>
      <div className='d-none d-md-flex mx-n2'>
        <span className='px-2'>
          <AppLanguageSwitcher />
        </span>
        <span className='px-2'>
          <AppNotifications />
        </span>
        <span className='px-2'>
          <AppHeaderMessages />
        </span>
      </div>
      <div className='d-md-none'>
        <Dropdown>
          <Dropdown.Toggle
            id='dropdown-custom-components'
            className={clsx(
              styles.dropdownToggleBtn,
              'p-0 bg-transparent border-0 d-flex align-items-center w-100 shadow-none',
            )}>
            <AppIconBtn>
              <FiMoreVertical />
            </AppIconBtn>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              <AppHeaderMessages />
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <AppNotifications />
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <AppLanguageSwitcher />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default AppHeader;

AppHeader.propTypes = {
  showDrawer: PropTypes.func,
};
