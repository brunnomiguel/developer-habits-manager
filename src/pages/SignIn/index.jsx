import { Container, Content, BackgroundImage, ContentAnimation } from "./style";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "../../providers/User";

import Input from "../../components/Input";
import Button from "../../components/Button";

const SignIn = () => {
  const { signIn } = useContext(UserContext);

  const formSchema = yup.object().shape({
    user: yup.string().required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    signIn(data);
    reset();
  };

  return (
    <Container>
      <Content>
        <ContentAnimation>
          <h1>Developer Habits Manager</h1>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Faça login na sua conta</h2>
            <Input
              label="Nome de Usuário:"
              placeholder="Digite seu nome de usuário"
              register={register}
              name="user"
              error={errors.user?.message}
            />
            <Input
              label="Senha:"
              placeholder="Digite a sua senha"
              type="password"
              register={register}
              name="password"
              error={errors.password?.message}
            />
            <Button loginMobile type="submit">
              Login
            </Button>
          </form>
          <p>
            Não tem uma conta? <Link to="/SignUp">Cadastre-se</Link>
          </p>
        </ContentAnimation>
      </Content>
      <BackgroundImage />
    </Container>
  );
};

export default SignIn;
