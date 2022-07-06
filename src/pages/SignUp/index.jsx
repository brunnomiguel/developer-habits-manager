import { Container, SignupData, ImageContent } from "./style";

import { useHistory, Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./formYup";

import { toast } from "react-toastify";
import api from "../../services/api";

import Input from "../../components/Input";
import Button from "../../components/Button";

const SignUp = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = ({ username, email, password }) => {
    const user = { username, email, password };

    api
      .post("/users/", user)
      .then((_) => {
        toast.success("Conta criada com sucesso!");
        history.push("/SignIn");
      })
      .catch((err) => {
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

          <Button loginDesk darkSchema white share type="submit">
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
