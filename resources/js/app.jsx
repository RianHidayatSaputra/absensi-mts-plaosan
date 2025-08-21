import './bootstrap';
import '../css/app.css';
import '../css/theme.css';
import '../css/theme.min.css';
import '../css/components/collapse.css';
import '../css/components/dropdown.css';
import '../css/components/nav.css';
import '../css/components/navbar.css';
import '../css/components/offcanvas.css';
import '../css/components/prism.css';
import '../css/components/toast.css';
import '../css/components/tooltips.css';
import '../css/theme.js';
import '../css/theme.min.js';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import React from 'react';

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

const appName = import.meta.env.VITE_APP_NAME || 'SIMA';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <React.StrictMode>
                <App {...props} />
            </React.StrictMode>
        );
    },
    progress: {
        color: '#FF0000',
    },
});
