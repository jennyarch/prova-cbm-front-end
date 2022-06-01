# Prova CBMSE 2022

Para concorrer a vaga o candidato terá que desenvolver uma aplicação web utilizando as tecnologias abaixo listadas.


# Tecnologias
- React
- Bootstrap, Material ou qualquer framework de estilização


## Instruções da prova

- O candidato deve fazer um **fork** desse repositório e criar sua estrutura de pastas sendo que no mesmo repositório tem que esta o **fron-end**.
- Existe uma pasta **server** onde existe um mock de uma api com os end-point nescessarios. Para executar basta acessar a pasta pelo terminal e colocar os comandos `npm install` e `npm start` apos isso basta acessar a url: `http://localhost:6666`
- Após o projeto pronto o candidato deve fazer o *commit e push* para o seu repositório **não sendo necessário** solicitar um **pull-request**


## Projeto

- Existe um Figma com o prototipo [(Link)](https://www.figma.com/file/5TVAkg1MawaEpuMpUDEK3J/Prova-CBM-Front-end?node-id=0%3A1), que deve ser seguido.
- Regras de input:
  - CPF deve conter vádição e mascara, mas quando for enviar para o endpoint a máscara deve ser retirada
  - Data de Nascimento não pode permitir pessoas menores que 18 anos
  - Signo deve ser um select com a opições do endpoint de signos
  - Tipo Sanguíneo deve ser um select com a opições do endpoint de tipo-sanguineo
  - E-mail deve ter validação de tipo
  - Telefone deve ter mascara e validação do 9 digito, mas quando for enviar para o endpoint a máscara deve ser retirada
  - Formação pode ser mais de uma
  - Experiência pode ser mais de uma
  - Competencia é um select option multiplo
  - Sobre campo texto livre
  - Todos os campos são obrigatórios



## Oque será avaliado?
O desafio será avaliado através dos seguintes critérios.

- Habilidade com framework de front-end
- Habilidade em estilização de página HTML
- Arquitetura do projeto
- Utilização de componentes
- Testes unitários
- Responsividade

## Entrega

- O código possui algum controle de dependências?
- O resultado final está completo para ser executado?
- O resultado final atende ao que se propõe fazer?
- O resultado final atende totalmente aos requisitos propostos?
- Existe Testes unitários ?
- Existe alguma implementação de CI/CD ?

## Boas Práticas

- O código está bem estruturado?
- O código está fluente na linguagem?
- O código faz o uso correto de Design Patterns?

## Documentação

- O código foi entregue com um arquivo de README claro de como se guiar?
- O código possui comentários pertinentes?
- O código está em algum controle de versão?
- Os commits são pequenos e consistentes?
- As mensagens de commit são claras?

## Código Limpo

- O código possibilita expansão para novas funcionalidades?
- O código é Don't Repeat Yourself?
- O código é fácil de compreender?
