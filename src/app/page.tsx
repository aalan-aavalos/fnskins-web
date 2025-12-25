"use client"

import { apiLogin } from "@/lib/api";
import { ChangeEvent, FormEvent } from "react";

export default function Home() {

  // const handleChange = (
  //   e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ): void => {
  //   const { name, value } = e.target;
  //   setForm((prevForm) => ({ ...prevForm, [name]: value }));
  // };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { email, password } = {
      email: String(formData.get("email") || ""),
      password: String(formData.get("password") || ""),
    };




    const res = await apiLogin(email, password);

    console.log(res);
  }

  return (
    <div >
      <h1>Bienvenido a la pagina de inicio de Sesión</h1>
      <p>Por favor, inicia sesión para continuar.</p>

      <form
        onSubmit={handleLogin}
      >
        <label>
          Email
          <input name="email" type="email" />
        </label>
        <label>
          Password
          <input name="password" type="password" />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}
