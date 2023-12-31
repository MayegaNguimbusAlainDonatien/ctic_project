import clsx from 'clsx';
import React from 'react';
import invoiceData from '@crema/services/db/extraPages/invoice/invoiceData';
import IntlMessages from '@crema/utility/IntlMessages';
import styles from '../Invoice1/index.module.scss';
import styles2 from './index.module.scss';

const Header = () => {
  return (
    <div
      className={clsx(
        styles.invoiceHeader,
        'd-flex flex-column align-items-lg-center',
      )}>
      <div
        className={clsx(
          styles.invoiceLogo,
          styles2.invoiceLogo,
          'd-inline-flex align-items-center justify-content-center mb-4 align-items-lg-start justify-content-lg-start mb-lg-0',
        )}>
        <img alt='logo' src={'/assets/images/logo.png'} />
      </div>

      <div
        className={clsx(
          styles.invoiceHeaderRow,
          'd-flex flex-column flex-sm-row justify-content-between',
        )}>
        <div className={styles.invoiceHeaderItem}>
          <h3>{invoiceData.company.name}</h3>
          <p>{invoiceData.company.address1}</p>
          <p>{invoiceData.company.address2}</p>
          <p>Phone: {invoiceData.company.phone}</p>
        </div>

        <div className={styles.invoiceHeaderItem}>
          <h3>
            <IntlMessages id='invoice.client' />
          </h3>
          <p>{invoiceData.client.name}</p>
          <p>{invoiceData.client.phone}</p>
          <p>{invoiceData.client.email}</p>
        </div>

        <div className={styles.invoiceHeaderItem}>
          <h3>
            <IntlMessages id='invoice.invoice' />
          </h3>
          <p>
            <IntlMessages id='invoice.id' />: {invoiceData.invoice.id}
          </p>
          <p>
            <IntlMessages id='invoice.issued' />: {invoiceData.invoice.date}
          </p>
          <p>
            <IntlMessages id='invoice.dueOn' />: {invoiceData.invoice.dueDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
