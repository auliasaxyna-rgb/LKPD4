import Link from 'next/link';

import React from 'react';
export default function Home() {
    return (
        <div>
            <h1>Selamat datang di Portal Sekolah</h1>
            <Link href='/teachers/budi'>Daftar Guru</Link>
            <br/>
            <Link href='/library'>Perpustakaan</Link>
        </div>
    );
}