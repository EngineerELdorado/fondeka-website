import { Suspense } from 'react';
import OpenLandingClient from './OpenLandingClient';

export const metadata = {
    title: 'Open Fondeka app',
    robots: {
        index: false,
        follow: false,
    },
};

export default function OpenPage() {
    return (
        <Suspense fallback={null}>
            <OpenLandingClient />
        </Suspense>
    );
}
