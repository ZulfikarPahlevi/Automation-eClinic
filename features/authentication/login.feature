Feature: Login eClinic

  @smoke @authentication
  Scenario: User berhasil login menggunakan credential yang valid
    Given user berada di halaman login eClinic
    When user mengisi nama faskes
    And user memilih faskes
    And user mengisi username
    And user mengisi password
    And user klik tombol Login
    Then user berhasil masuk ke halaman Home
