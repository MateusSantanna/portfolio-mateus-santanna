import { ProjectsConteiner } from "./style";

const Projects = () => {
  return (
    <>
      <ProjectsConteiner>
        <section id="projects">
          <h1>Componente de Projetos</h1>
        </section>
      </ProjectsConteiner>
    </>
  );
};

export default Projects;

// CARREGAR PROJETOS DO GITHUB USANDO MAP E SEPARANDO EM BLOCOS COMO DIVS

// COM DIV, CADA DIV VAI TER UL

// E CADA UL VAI TER UMA IMAGEM, UM TÍTULO, UMA DESCRIÇÃO E 2 BOTÕES

// 1 BOTÃO SERÁ O REPOSITÓRIO E O OUTRO O DEPLOY E ELES VÃO ESTAR SEPARADOS

// A MARCAÇÃO DE UL SERÁ NONE, A IMAGEM VAI SER NO TAMANHO DESKTOP COM BORDAS EXTERNAS
// E OS BOTÕES SERÃO UM QUADRADO COM BORDAS
