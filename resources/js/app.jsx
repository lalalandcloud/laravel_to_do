import { createInertiaApp } from '@inertiajs/react';
import './bootstrap';
import Layout from './components/Layouts';
import { createRoot } from 'react-dom/client';
import React from 'react';

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`].default;
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <Layout>
                <App {...props} />
            </Layout>
        );
    },
})