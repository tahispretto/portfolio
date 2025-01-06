# Postman & Newman

## Descrição
Postman é uma ferramenta para testes de APIs, e o Newman permite rodar coleções de forma automatizada.

## Exemplos Disponíveis
1. **API Test Collection**: Testes básicos de endpoints.
2. **Newman Report**: Relatório HTML gerado pelo Newman.

## Como Usar
1. Importe o arquivo `api-tests.json` no Postman.
2. Para rodar com Newman:
newman run api-tests.json -r html