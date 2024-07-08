# Sistema de Agendamentos

### Requisitos Funcionais

- [ ] Deve ser possível somente administrador se autenticar;
- [ ] Deve ser possível somente administrador adicionar um agendamento;
- [ ] Deve ser possível somente administrador modificar um agendamento;
- [ ] Deve ser possível somente administrador excluir um agendamento;
- [ ] Deve ser possível ver os agendamentos do dia;
- [ ] Deve ser possível ver os agendamentos da semana;
- [ ] Deve ser possível ver os agendamentos passados;

### Regras de Negócio

- [ ] Um agendamento só poderá ser criado, modificado ou excluido caso o administrador esteja autenticado;
- [ ] Um agendamento não pode ser craido com mais de um mês de antecedência.
- [ ] A visualização dos agendamentos tanto passados quanto os vindouros só poderam ocorrer caso o administrador esteja logado;

### Requisitos não-funcionais

- [ ] Todos os agendamentos devem ser persistidos em um banco de dados firestore do firebase;
- [ ] As credenciais do administrador devem ser registradas no banco de dados;
- [ ] As páginas de agendamentos devem ser paginadas (10 agendamentos por página).

### Modelo do Banco de Dados (Exemplo)

##### Tabela de Agendamentos

| id | client_name    | description            | date       | time  | price   | is_concluded |
| -- | -------------- | ---------------------- | ---------- | ----- | ------- | ------------ |
| 1  | Maria Fernanda | Unhas dos pés e mãos | 12/08/2024 | 12:00 | R$50,00 | true         |
| 2  | Lucia Delgado  | Unhas das mãos        | 12/08/2024 | 14:30 | R$25,00 | false        |

##### Tabela de Administradores

| id | username | password |
| -- | -------- | :------: |
| 1  | Rose     | 07233010 |
