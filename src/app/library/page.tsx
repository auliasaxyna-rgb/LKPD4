import Link from "next/link";

export default function Library() {
    return (
        <div>
            <h1>Halaman Perpustakaan</h1>
            <h2>List Buku</h2>
            <ul>
                <li>Fiksi</li>
                <li>Non-Fiksi</li>
                <li>Biografi</li>
                <li>Sejarah</li>
                <li>Ilmu Pengetahuan</li>
            </ul><br/><br/>
            <a><Link href='/'>Kembali ke Beranda</Link></a>
        </div>
    );
}