import { Container, SignupData, ImageContent } from "./style";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-toastify";
import api from "../../services/api";

import { useHistory, Link } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";

const SignUp = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .email("Necessário estar no formato de email @")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Senha com menos de 8 caracteres")
      .matches(
        "^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[$*&%@#])",
        "Senha preicsa ser forte: 1 letra maiscúla/minúscula, 1 número e 1 símbolo: $*&%@#"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({ username, email, password }) => {
    console.log("dados ok");

    const user = { username, email, password };

    api
      .post("/users/", user)
      .then((_) => {
        toast.success("Sucesso ao criar conta");
        history.push("/SignIn");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Já existe um usuário com este nome");
      });
  };

  return (
    <Container>
      <ImageContent />
      <SignupData>
        <h1>Developer Habits Manager</h1>

        <h3>Faça seu cadastro</h3>

        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            placeholder="Nome de usuário"
            register={register}
            name="username"
            label="Usuário: "
            error={errors.username?.message}
            type="text"
          />

          <Input
            placeholder="Email"
            register={register}
            name="email"
            label="Email: "
            error={errors.email?.message}
            type="text"
          />

          <Input
            placeholder="Senha"
            register={register}
            name="password"
            label="Senha: "
            error={errors.password?.message}
            type="password"
          />

          <Input
            placeholder="Confirmar senha"
            register={register}
            name="confirmPassword"
            label="Confirmar Senha: "
            error={errors.confirmPassword?.message}
            type="password"
          />

          <Button loginDesk white share type="submit">
            Cadastrar
          </Button>
        </form>

        <div className="signIn">
          <p>Já tem uma conta?</p>
          <Link to="/SignIn">Faça seu login</Link>
        </div>
      </SignupData>
    </Container>
  );
};

export default SignUp;
