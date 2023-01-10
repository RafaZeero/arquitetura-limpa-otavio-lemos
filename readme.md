# Curso Arquitetura Limpa

## Updates

Após completar o projeto, usar o pacote `npm-check-updates`

```sh
npm install -g npm-check-updates
```

1. Instalar a ferramenta;
2. Update do package.json:

```sh
ncu --upgrade
```

3. Validar as mudanças
4. Instalar os novos pacotes com `npm install`

## Leis do TDD

1. Você não pode escrever nenhum código de produção a não ser que seja para fazer um teste que está falhando, passar.

2. Você não pode escrever mais em um teste de unidade do que seja suficiente para que ele falhe (falhas de compilação são falhas também).

3. Você não pode escrever mais código de produção do que o suficiente para fazer o caso de teste que está falhando, passar.
