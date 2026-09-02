Feature: Login eClinic

  @smoke @authentication
  Scenario: User berhasil login menggunakan credential yang valid
    Given user berada di halaman login eClinic
    When user mengisi nama faskes "bandung"
    And user mengisi username "agus"
    And user mengisi password "kwalat123"
    And user klik tombol Login
    Then user berhasil masuk ke halaman Home