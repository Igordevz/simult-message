# simult-message

## Estrutura do Backend de Mensagens 📬

Este projeto visa fornecer uma estrutura de backend para um sistema de mensagens. O backend será responsável por gerenciar o cadastro de usuários, envio, edição e exclusão de mensagens. A seguir estão as etapas e funcionalidades principais.

### Cadastro de Usuário 👤

#### Etapas de Cadastro
1. **API para Salvar Usuário**
    - Criação de uma API para registrar novos usuários no sistema.
    - **Endpoint:** `POST /api/users`
    - **Dados necessários:**
        - Nome de usuário
        - Senha
        - E-mail

    | Método | Endpoint      | Descrição                  |
    |--------|---------------|----------------------------|
    | POST   | /api/users    | Registrar novo usuário     |

2. **Armazenamento Local**
    - Após o cadastro, salvar localmente no dispositivo (computador/celular) as seguintes informações:
        - **Token:** Token de autenticação gerado para sessões seguras.
        - **ID:** Identificador único do usuário.

3. **Validar Email**
    - Após o cadastro, é necessário utilizar a rota `/api/users/valid` para validar o email do usuário no sistema :
        - **Accept:** ```js  accept:true ```


#### Etapas de Login

1. **Fazer login para obter Token**
    - O  sistema de login que é feito com `EMAIL` e `PASSWORD` te retorna apenas o token do usuário:
        - **Token:** `69c21b85-85a9-4b48-8659-61e3d51a7a6b`.
     - Após obter o Token seguir as etapas Abaixo👇 :

2. **Buscar Dados do Usuário**
    - API para recuperar as informações do usuário utilizando o token de autenticação.
    - **Endpoint:** `POST /api/users/token`
    - **Dados Retornados:**
        - Nome de usuário
        - E-mail
        - Histórico de mensagens
        - Mensagens do usuário

    | Método | Endpoint        | Descrição                       |
    |--------|-----------------|---------------------------------|
    | POST    | /api/users/token | Buscar dados do usuário         |
  

### Gerenciamento de Mensagens 💬

#### Mensagens ✉️

1. **API para Enviar criar um chat**
    - Criação de uma API para criar chat (`Adicionar contato`).
    - **Endpoint:** `POST /api/chat`
    - **Dados necessários:**
        - ID do chat - `Criado Aleatório e Automático`
        - ID do user - (`quem está logado`)
        - Email do remetente

    | Método | Endpoint       | Descrição                   |
    |--------|----------------|-----------------------------|
    | POST   | /api/chat  | Criar um chat        |


1. **API para Enviar Mensagem**
    - Criação de uma API para enviar mensagens.
    - **Endpoint:** `POST /api/messages`
    - **Dados necessários:**
        - ID do chat
        - ID do remetente
        - Conteúdo da mensagem

    | Método | Endpoint       | Descrição                   |
    |--------|----------------|-----------------------------|
    | POST   | /api/messages  | Enviar nova mensagem        |

**API para Pegar Mensagens**
    - Criação de uma API para pegar mensagens.
    - **Endpoint:** `post /api/messages/get`
    - **Dados necessários:**
        - ID do chat

    | Método | Endpoint       | Descrição                   |
    |--------|----------------|-----------------------------|
    | POST   | /api/messages/get  | Pegar mensagens        |
#### Apagar Mensagem 🗑️
1. **API para Apagar Mensagem**
    - Criação de uma API para excluir mensagens utilizando o ID da mensagem.
    - **Endpoint:** `DELETE /api/messages/`
    - **Processo:**
        - Receber o ID da mensagem
        - Receber o ID do chat
        - Excluir a mensagem correspondente do banco de dados

    | Método | Endpoint                  | Descrição             |
    |--------|---------------------------|-----------------------|
    | DELETE | /api/messages/ | Apagar mensagem       |

#### Editar Mensagem ✏️
1. **API para Editar Mensagem**
    - Criação de uma API para editar mensagens existentes.
    - **Endpoint:** `PUT /api/messages/edit`
    - **Dados necessários:**
        - ID da mensagem
        - Novo conteúdo da mensagem
        - ID do chat
    - **Processo:**
        - Receber o ID da mensagem e o novo conteúdo
        - Atualizar a mensagem no banco de dados com o novo conteúdo

    | Método | Endpoint                | Descrição             |
    |--------|-------------------------|-----------------------|
    | PUT    | /api/messages/edit | Editar mensagem       |

## Resumo das APIs 📄

1. **Usuários**
    - `POST /api/users` - Registrar novo usuário
    - `POST /api/users/token ` - Buscar dados do usuário

    | Método | Endpoint      | Descrição                  |
    |--------|---------------|----------------------------|
    | POST   | /api/users    | Registrar novo usuário     |
    | POST    | /api/users/token | Buscar dados do usuário    |

2. **Mensagens**
    - `POST /api/messages` - Enviar nova mensagem
    - `DELETE /api/messages` - Apagar mensagem existente
    - `PUT /api/messages/edit` - Editar mensagem existente

    | Método | Endpoint                  | Descrição                   |
    |--------|---------------------------|-----------------------------|
    | POST   | /api/messages             | Enviar nova mensagem        |
    | DELETE | /api/messages | Apagar mensagem existente   |
    | PUT    | /api/messages/edit | Editar mensagem existente   |

## Considerações Finais 📝

Este plano de estrutura backend cobre as operações básicas para um sistema de mensagens, incluindo o cadastro de usuários, envio, edição e exclusão de mensagens. As APIs mencionadas devem ser implementadas com autenticação segura e tratamento adequado de erros para garantir a integridade e segurança dos dados dos usuários.
