import Link from "next/link";

export default function Profile() {
    return (
        <div>
            <p><Link href='/'>Beranda</Link></p>
            <h2>Biodata</h2>
            <p>Nama: Aulia Ika savitri</p>
            <p>Tanggal Lahir: 18 Juni 2010</p>
            <p>Kelas: XI RPL B </p>
            <p>Sekolah: SMK Negeri 4 Malang</p>
            <p>Hobi: Membaca AU</p>
            <p>Alamat: Ngawonggo, Tajinan, Malang</p>
        </div>
    );
}
