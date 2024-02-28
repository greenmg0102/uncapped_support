import { lazy } from 'react';

const ContactUsCover = lazy(() => import('../pages/Pages/ContactUsCover'));
const Error = lazy(() => import('../components/Error'));
const LoginBoxed = lazy(() => import('../pages/Authentication/LoginBoxed'));

const routes = [
    {
        path: '/',
        element: <ContactUsCover />,
    },
    {
        path: '/auth/boxed-signin',
        element: <LoginBoxed />,
        layout: 'blank',
    },
    {
        path: '*',
        element: <Error />,
        layout: 'blank',
    },
];

export { routes };