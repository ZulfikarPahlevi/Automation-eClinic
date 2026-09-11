Feature: Registration Patient

@smoke @registration
Scenario: User berhasil mendaftarkan pasien umum
Given User berada pada halaman Pendaftaran Pasien
And User membuka form pendaftaran pasien
When User mengisi seluruh data pendaftaran
And User memilih asuransi penjamin umum
And User menyimpan data pendaftaran pasien
Then User berhasil menyimpan data pendaftaran pasien
And User berada pada halaman pendaftaran pelayanan