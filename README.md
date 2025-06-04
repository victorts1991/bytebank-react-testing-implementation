# bytebank-react-testing-implementation

Um projeto prático de **Integração Contínua (CI/CD)** focado na implementação e execução de **testes automatizados** em uma aplicação React existente (ByteBank). Este repositório demonstra a aplicação de **Jest** e **React Testing Library** para garantir a qualidade e a confiabilidade dos componentes da UI.

---

## **Tecnologias de Teste Utilizadas**

* **Jest:** Framework de testes JavaScript/TypeScript para execução de testes unitários e de integração.
* **React Testing Library (RTL)::** Biblioteca complementar ao Jest, focada em testar componentes React da perspectiva do usuário, garantindo a acessibilidade e a funcionalidade.
* **GitHub Actions:** Plataforma de CI/CD para automatizar o workflow de testes na nuvem.

---

## **Como Rodar a Aplicação Localmente**

Para colocar a aplicação do ByteBank em funcionamento na sua máquina:

1.  **Clone o repositório:**
2.  **Instale as dependências:**
    ```bash
    npm install
    # ou se preferir yarn
    # yarn install
    ```

3.  **Inicie a aplicação:**
    ```bash
    npm start
    # ou
    # yarn start
    ```
    A aplicação será iniciada e geralmente estará disponível em `http://localhost:3000` no seu navegador.

---

## **Como Rodar os Testes Localmente**

Para executar os testes de componentes na sua máquina:

1.  **Certifique-se de que as dependências estejam instaladas** (veja o passo 2 em "Como Rodar a Aplicação Localmente").

2.  **Execute os testes:**
    ```bash
    npm test
    # ou se preferir yarn
    # yarn test
    ```
    Isso iniciará o Jest no modo interativo (`watch mode`), que roda os testes automaticamente a cada alteração de arquivo.

3.  **Para rodar os testes uma única vez e sair:**
    ```bash
    npm test -- --watchAll=false
    # ou
    # yarn test -- --watchAll=false
    ```

---

## **Integração Contínua (CI/CD)**

Este projeto utiliza **GitHub Actions** para automatizar a execução dos testes de componentes.

* **Configuração:** O workflow de CI/CD está definido no arquivo `.github/workflows/test-components.yml`.
* **Gatilho:** Os testes são automaticamente executados a cada `push` na branch `main`.
* **Verificação:** Você pode acompanhar o status das execuções e os resultados dos testes na aba "Actions" do repositório GitHub.


