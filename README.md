A U L A S F U L L S T A C K F I R J A N

# CURSO-ANGULAR

#### README

### 1️⃣ Baixar o Instalador Oficial
**`https://github.com/coreybutler/nvm-windows/releases`** 
### 2️⃣ Executar o Instalador
  **`nvm-setup.exe`**
### 3️⃣ Verificar a Instalação

---
Versões ativamente suportadas

**``https://angular.dev/reference/versions``**


📁 Aula 01 - Introdução ao Angular 19

   📝 Descrição

    Nesta primeira aula, tivemos uma visão geral do Angular 19, incluindo sua estrutura, conceitos fundamentais e preparação do ambiente de desenvolvimento.
    
    Tecnologias Utilizadas

    Node.js  /  TypeScript  /  Angular 19   /  RxJS
    
📁 Aula 02

    Apresentação de Componentes, Services Angular

    🔗 **`Services Implementados`**

        Service	Função

        ProdutosService	Fornece um array de produtos contendo:

        - foto: caminho da imagem na pasta assets/
        - rotulo: nome do produto
        - detalhe: descrição do produto

        AuthService	Serviço de autenticação simples, responsável por validar login e senha do usuário.

        Configuração de rotas via app.rotes.ts - RouterModule.forRoot().
                
📁 Aula 03

    ⚙️ Gerenciamento de Estado
        Services e Subjects / BehaviorSubject para comunicação entre componentes.
        🔄 Técnicas Aplicadas
            Services Singleton: Usados para compartilhar e persistir dados entre componentes sem recarregar o estado.
        RxJS Observables / BehaviorSubjects:
            Permite a emissão de dados em tempo real.
            Facilita o compartilhamento de estados entre componentes distintos.

📁 Aula 04 - Uso de Guard no Angular 19

    📝 Descrição

    Nesta aula aprendemos a proteger rotas utilizando Guards no Angular 19, garantindo que apenas usuários autenticados ou autorizados possam acessar determinadas páginas da aplicação.

    AuthGuard - Verifica se o usuário está autenticado antes de permitir o acesso à rota. Se não estiver, o usuário é redirecionado para a tela de login.


📁 Aula 05 - Requisições HTTP no Angular 19

     📝 Descrição

    Nesta aula aprendemos como realizar requisições HTTP utilizando o HttpClient do Angular para consumir APIs REST, com exemplos práticos de GET, POST, PUT e DELETE.

📁 Aula 06 - Rotas

    Projeto Angular: Site Institucional + Autenticação
    📌 Descrição
    Projeto desenvolvido em Angular com componentes standalone, integração com services, carrossel de imagens, autenticação com Reactive Forms, Validação, Guarda de Rotas e muito mais!

    🛠️ Funcionalidades
    🧩 Componentes Standalone
    HomeComponent: Página inicial do site.

    SobreComponent: Informações sobre a empresa.

    ServicosComponent: Lista de serviços oferecidos.

    ContatoComponent: Formulário de contato.

    🖼️ Carrossel de Imagens
    Carrossel com 3 ou mais imagens.

    Troca automática a cada 3 segundos.

    As imagens são armazenadas na pasta /public.

    🛍️ ProdutosService
    Service que fornece um array de produtos com:

    {foto: Caminho da imagem, rotulo: Nome do produto, detalhe: Descrição detalhada do produto}

    {
      foto: 'assets/produtos/produto1.jpg',
      rotulo: 'Produto 1',
      detalhe: 'Descrição completa do Produto 1'
    }
    🔐 Formulário de Login
    Desenvolvido com ReactiveFormsModule.

    Utiliza:   FormBuilder FormGroup Validators para campos obrigatórios.
    
    📡 AuthService
    Realiza a validação dos dados de login.
    Caso contrário, bloqueia o acesso.

    🔒 Guarda de Rotas (authGuard)
    Permite o acesso a rotas restritas apenas se o usuário estiver autenticado.

    Caso contrário, redireciona para a página de login.

    🚀 Tecnologias Utilizadas
            Angular 19 
            TypeScript
            Reactive Forms
            Bootstrap ou Angular Material (para o carrossel e estilos)

    📁 Estrutura de Pastas (sugestão)
    
          /src
          ├── /app
          │    ├── home
          │    ├── sobre
          │    ├── servicos
          │    ├── contato
          │    ├── auth
          │    │     ├── auth.service.ts
          │    │     └── auth.guard.ts
          │    ├── produtos
          │    │     └── produtos.service.ts
          │    └── shared
          │          └── carrossel
          ├── /assets
          │    └── produtos
          │          ├── produto1.jpg
          │          ├── produto2.jpg
          │          └── produto3.jpg
          ✅ Como Executar
    Clone o repositório:
        Instale as dependências: npm install
        Rode a aplicação: ng serve
        Acesse: http://localhost:4200

       ## Prints

### Tela Inicial
<img src="prints/telaInicial.png" alt="tela de inicial" width="400"/>

### Tela de Contato
<img src="prints/telaContatos.png" alt="tela de contatos" width="400"/>

### Tela de Login
<img src="prints/login.png" alt="tela de login" width="400"/>

### Vídeo do Carrossel
![Demonstração](prints/carrosselAngular.gif)

    👨‍💻 Autor
    Evandro dos Santos Dias

📁 Aula 07