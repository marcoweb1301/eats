function kirim() {
  let projekValue = document.querySelector('.form_projekselesai').value; //
  let lokasiValue = document.querySelector('.form_lokasi').value; //
  let teleponValue = document.querySelector('.form_nomortelepon').value; //
  let jenisMakananValue = document.querySelector('.jenis-makanan').value; //
  let pengantaranValue = document.querySelector('.pengantaran').value; //

  document.getElementById('p_projek').innerHTML = 'Nama: ' + projekValue;
  document.getElementById('p_lokasi').innerHTML = 'Alamat: ' + lokasiValue;
  document.getElementById('p_nomor_telepon').innerHTML = 'Kuantitas: ' + teleponValue;
  document.getElementById('jenisMakanan').innerHTML = 'Jenis makanan: ' + jenisMakananValue;
  document.getElementById('p_pengantaran').innerHTML = 'Sistem Pengantaran: ' + pengantaranValue; 
  document.getElementById('p_konfirmasi').innerHTML = 'Terimakasih ' + projekValue + ' !' + ' Permintaan anda akan kami proses';
}
