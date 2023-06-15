import * as React from "react";
import CustomPage from "../../components/CustomPage";
import { UserModel } from "@/models/user.model";

const studentExample1 = new UserModel(
  "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "Nome Sobrenome",
  "aluno@example.com",
  "(35) 99999-9999",
  123456789,
  "Aluno(a)",
  true,
  "profile.png"
);
const studentExample2 = new UserModel(
  "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "Aluno Teste",
  "teste@email.com",
  "(35) 99999-9999",
  987654321,
  "Aluno(a)",
  false,
  "profile.png"
);

export default function index() {
  return (
    <div className="flex flex-row justify-center items-center md:h-screen md:w-screen">
      <CustomPage
        title={"Alunos"}
        crudName="students"
        hasSearch={true}
        users={[
          studentExample1,
          studentExample2,
          studentExample1,
          studentExample2,
          studentExample1,
          studentExample1,
          studentExample1,
        ]}
      />
    </div>
  );
}
