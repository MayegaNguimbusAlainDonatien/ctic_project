import React from 'react';
import {RoutePermittedRole} from 'shared/constants/AppEnums';

export const dashBoardConfigs = [
  {
    permittedRole: RoutePermittedRole.admin,
    path: '/homepage',
    component: React.lazy(() => import('./ECommerce')),
  },
];
