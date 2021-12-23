Feature: Visitar Pagina

    Abrir la pagina de Choucair
    @focus
    Scenario: Abrir Pagina
        Given Me encuentro en la pagina de choucair
        When Abro la pagina de empleos
        Then Debo estar en la pagina de "empleos testing – Choucair Testing"