import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const errorPage = () => (
    <div>
        <h1>Opps, somethign went wrong</h1>
        <p>Try <Link href="/"><a>going back</a></Link></p>
    </div>
);

export default errorPage