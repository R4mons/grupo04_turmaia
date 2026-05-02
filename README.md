# Projeto G4 - Consulta de APIs Brasileiras

## Descricao do Projeto

Aplicacao web desenvolvida em React que consome duas APIs publicas da BrasilAPI:

- **Consulta de DDD**: O usuario informa um codigo DDD (2 digitos) e a aplicacao retorna o estado correspondente e a lista de cidades associadas a esse DDD.
- **Consulta de Municipios IBGE**: O usuario informa a sigla de um estado (UF) e a aplicacao retorna a lista completa de municipios daquele estado com seus respectivos codigos IBGE.

O projeto utiliza React, React Bootstrap para estilizacao dos componentes, Axios para requisicoes HTTP e React Router DOM para navegacao entre paginas. A aplicacao possui tratamento de erros para entradas invalidas do usuario e para indisponibilidade dos servicos.

## Instrucoes de Execucao

### Pre-requisitos

- Node.js (versao 16 ou superior)
- npm (gerenciador de pacotes do Node.js)

### Passo a passo

1. Clone o repositorio:

```bash
git clone <url-do-repositorio>
```

2. Acesse a pasta do projeto:

```bash
cd Projeto G4
```

3. Instale as dependencias:

```bash
npm install
```

4. Inicie a aplicacao:

```bash
npm start
```

5. Acesse no navegador:

```
http://localhost:3000
```

A aplicacao sera aberta automaticamente no navegador. Apos o login, utilize o menu de navegacao para acessar as paginas de consulta de DDD e de municipios IBGE.

## Integrantes do Grupo

- Gabriel Soares
- Augusto Rocha
- Isabella Soares
- Felipe Soares
- Ramon Saiol

## Exemplos dos JSONs Exibidos

### API de DDD (BrasilAPI)

Endpoint: `https://brasilapi.com.br/api/ddd/v1/{ddd}`

Exemplo de requisicao: `GET https://brasilapi.com.br/api/ddd/v1/21`

Exemplo de resposta:

```json
{
  "state": "RJ",
  "cities": [
    "ANGRA DOS REIS",
    "APERIBE",
    "ARARUAMA",
    "AREAL",
    "ARMACAO DOS BUZIOS",
    "ARRAIAL DO CABO",
    "BELFORD ROXO",
    "BOM JARDIM",
    "CABO FRIO",
    "CACHOEIRAS DE MACACU",
    "CAMBUCI",
    "CARAPEBUS",
    "COMENDADOR LEVY GASPARIAN",
    "CONCEICAO DE MACABU",
    "CORDEIRO",
    "DUAS BARRAS",
    "DUQUE DE CAXIAS",
    "ENGENHEIRO PAULO DE FRONTIN",
    "GUAPIMIRIM",
    "IGUABA GRANDE",
    "ITABORAI",
    "ITAGUAI",
    "ITALVA",
    "ITAOCARA",
    "ITAPERUNA",
    "JAPERI",
    "LAJE DO MURIAE",
    "MACAE",
    "MAGE",
    "MANGARATIBA",
    "MARICA",
    "MENDES",
    "MESQUITA",
    "MIGUEL PEREIRA",
    "MIRACEMA",
    "NATIVIDADE",
    "NILOPOLIS",
    "NITEROI",
    "NOVA FRIBURGO",
    "NOVA IGUACU",
    "PARACAMBI",
    "PETROPOLIS",
    "QUEIMADOS",
    "QUISSAMA",
    "RIO BONITO",
    "RIO CLARO",
    "RIO DAS OSTRAS",
    "RIO DE JANEIRO",
    "SAO GONCALO",
    "SAO JOAO DE MERITI",
    "SAQUAREMA",
    "SEROPEDICA",
    "SILVA JARDIM",
    "TANGUA",
    "TERESOPOLIS"
  ]
}
```

---

### API de Municipios IBGE (BrasilAPI)

Endpoint: `https://brasilapi.com.br/api/ibge/municipios/v1/{siglaUF}`

Exemplo de requisicao: `GET https://brasilapi.com.br/api/ibge/municipios/v1/RJ`

Exemplo de resposta (primeiros registros):

```json
[
  {
    "nome": "ANGRA DOS REIS",
    "codigo_ibge": "3300100"
  },
  {
    "nome": "APERIBE",
    "codigo_ibge": "3300159"
  },
  {
    "nome": "ARARUAMA",
    "codigo_ibge": "3300209"
  },
  {
    "nome": "AREAL",
    "codigo_ibge": "3300225"
  },
  {
    "nome": "ARMACAO DOS BUZIOS",
    "codigo_ibge": "3300233"
  },
  {
    "nome": "ARRAIAL DO CABO",
    "codigo_ibge": "3300258"
  },
  {
    "nome": "BELFORD ROXO",
    "codigo_ibge": "3300456"
  },
  {
    "nome": "BOM JARDIM",
    "codigo_ibge": "3300506"
  },
  {
    "nome": "BOM JESUS DO ITABAPOANA",
    "codigo_ibge": "3300605"
  },
  {
    "nome": "CABO FRIO",
    "codigo_ibge": "3300704"
  }
]
```
