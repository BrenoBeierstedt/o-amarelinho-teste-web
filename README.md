
# **Teste Full-Stack - O Amarelinho**


o projeto consiste em 3 repositórios distintos, sendo eles:
- [Inicial](https://github.com/BrenoBeierstedt/o-amarelinho-teste-inicial) : Agrega a stack e inicializa as aplicações em container (Docker)
- [Api ](https://github.com/BrenoBeierstedt/o-amarelinho-teste-api) : Projeto Back-end
- [Web(Atual)](https://github.com/BrenoBeierstedt/o-amarelinho-teste-web) : Projeto Front-end


> ## Bibliotecas e Ferramentas

* NPM
* Typescript
* Git
* tailwindcss
* vite
* phosphor

## Executando
O projeto está padronizado com a URI de API apontada para a network do docker, para rodar localmente é necessário alterar o target na configuração de proxy do vite, dentro de vite.config.ts

     proxy: {  
        '/api': {
          target: 'http://api:4000', <-- http://localhost:4000 (local)
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
      }


* o mesmo pode ser inicializado localmente com o comando ``npm run dev``