import { HeaderStyle } from "./style";

const Header = () => {
  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderStyle>
      <h1>Mateus Sant'anna</h1>
      <nav>
        <a href="#about" onClick={() => handleScrollToSection("about")}>
          Sobre
        </a>
        <a
          href="#technologies"
          onClick={() => handleScrollToSection("technologies")}
        >
          Tecnologias
        </a>
        <a href="#projects" onClick={() => handleScrollToSection("projects")}>
          Projetos
        </a>
        <a href="#contacts" onClick={() => handleScrollToSection("contacts")}>
          Contatos
        </a>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
