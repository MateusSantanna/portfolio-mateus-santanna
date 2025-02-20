import { useState } from "react";
import { Button, Input } from "style-components";
import { Form, TextArea } from "./style";

const Contacts = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    console.log("Mensagem enviada:", form);
    alert("Mensagem enviada com sucesso!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacts">
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Nome"
          value={form.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Digite sua mensagem..."
          value={form.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Enviar Mensagem</Button>
      </Form>
    </section>
  );
};

export default Contacts;
