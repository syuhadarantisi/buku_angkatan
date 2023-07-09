# Buku Angkatan Informatika 22

## Panduan Pengembangan

```
Struktur direktori
.
├── asset/                  - Berisi data statis
│   ├── profile/            - Berisi foto profil
│   │   ├── {nim}.{jpg|png} - Foto profil
│   ├── site/               - Berisi data situs keseluruhan
│   │   └── {nim}/          - Berisi data situs pribadi
├── bio/                    - Berisi biodata keseluruhan
│   ├── {nim}/              - Berisi Biodata pribadi
├── data/                   - Berisi data umum
│   └── members.tsx         - Data umum
```

1. Pada direktori ```asset/profile/``` kontributor dapat menambahkan foto pribadinya dengan format penamaan menggunakan 3 digit terakhir NIM ```{nim}.{jpg|png}``` serta ukuran **400x500**. Berkas foto tersebut dapat diakses pada url ```https://{base_url}/profile/{nim}.{jpg|png}```.

2. Untuk menampilkan foto pada halaman depan dapat dilakukan dengan memodifikasi berkas ```data/members.tsx``` dengan mengganti properti ```imageLink``` sesuai dengan foto yang disimpan, contoh sebagai berikut:
```js
{
  nim: '162',
  name: 'Nashrullah Fathul Qoriib',
  imageLink: 'profile/162.png',
  ...
}
```

3. Untuk menampilkan tombol yang terhubung ke halaman biodata atau situs dapat dilakukan dengan menghapus komentar (```//```) pada properti ```bioLink``` atau ```siteLink``` pada berkas ```data/members.tsx```.
```js
{
  nim: '162',
  name: 'Nashrullah Fathul Qoriib',
  imageLink: 'profile/162.png',
  bioLink: 'bio/162',
  // siteLink: 'site/162',
},
```

4. Biodata dapat ditulis melalui berkas markdown dengan nama ```index.md``` yang disimpan pada direktori ```bio/{nim}/``` dengan membuat subdirektori berdasarkan 3 digit terakhir NIM. Di dalam direktori ini juga dapat menyimpan berkas gambar. Biodata dapat diakses pada url ```https://{base_url}/bio/{nim}```.


5. Untuk mengunggah situs berbasis HTML dapat dilakukan dengan menyimpan nya ke dalam direktori ```site/{nim}/``` dengan membuat subdirektori berdasarkan 3 digit terakhir NIM. Situs dapat diakses pada url ```https://{base_url}/site/{nim}```.