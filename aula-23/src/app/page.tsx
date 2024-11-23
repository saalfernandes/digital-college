import { Button } from "@/app/button";
import { Title } from "./title";
import { Subtiitles } from "../../subtitlte";

export default async function Home() {
  const name ='Duda Fernandes'

  const response = await fetch ("https://localhost:3333/products")
 const data = await response.json

  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center">
      <Title content= {name} />

     <Subtiitles>Full Stack Developer</Subtiitles>

      <div className="flex flex-col mt-6 gap-6">
        <Button title="Adicionar" variant="" />
        <Button title="Sair" variant="danger" />
        <Button title="Entrar" variant="success" />
      </div>
    </div>
  );
}
