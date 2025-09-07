# Automação de Testes com Playwright

Este projeto contém testes automatizados usando Playwright para realizar buscas no Yahoo, e fazer uma verificação no site da UOL.

## 🔧 Pré-requisitos

- [Node.js](https://nodejs.org/) (v22.14.0 ou superior)

- NPM (geralmente instalado com Node.js)

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone 
```

2. Instale as dependências:
```bash
npm npm init playwright@latest
```

## 📁 Estrutura do Projeto

```
ps-automacao-playwright/
│
├── tests/                    # Arquivos de teste
│     ├── uol.spec.ts         # Testes sem Page Object
│     └── yahoo.spec.ts       # Testes sem Page Object
├── test-results/             # Resultados dos testes (logs/execuções)
├── screenshots/              # Capturas de tela geradas nos testes
└── playwright-report/        # Relatórios HTML do Playwright

```

## 🎯 Funcionalidades Testadas

- **Busca no Yahoo**
  1. **Versão Direta (yahoo.spec.ts)**
     - Implementação simples e direta
     - Inclui captura de screenshots
     - Logs detalhados de cada ação

- **Verificação na UOL**  
  2. **Versão Direta (uol.spec.ts)**
     - Implementação simples e direta
     - Inclui captura de screenshots
     - Logs detalhados de cada ação

## ⚡ Executando os Testes

```bash
npx playwright test

```

## 📷 Screenshots

Os screenshots são capturados automaticamente durante a execução dos testes:
- **yahoo.spec.ts**: Salva como 'yahoo-results'
- **uol.spec.ts**: Salva como 'uol-results'

Localização dos screenshots:
- `screenshots/` (após execução dos testes)


## 📌 Versões

- Playwright 1.55.0
