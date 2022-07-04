import * as yup from "yup";

const validateUpperCase = "^(?=.*[A-Z])";
const validateLowerCase = "^(?=.*[a-z])";
const validateNumbers = "(?=.*[0-9])";
const validateSpecialCharacter = "^(?=.*[!#@$%&])";
const validateCharacter = "^.{8,}$";

export const formSchema = yup.object().shape({
  username: yup.string().required("Campo obrigatório"),
  email: yup
    .string()
    .email("E-mail obrigatório!")
    .required("Campo obrigatório"),
  password: yup
    .string()
    .required("Campo obrigatório!")
    .matches(validateUpperCase, "Senha deve conter 1 letra maiuscula")
    .matches(validateLowerCase, "Senha deve conter 1 letra minuscula")
    .matches(validateNumbers, "Senha deve conter 1 numero")
    .matches(
      validateSpecialCharacter,
      "Senha deve conter um caractere especial"
    )
    .matches(validateCharacter, "Senha deve conter oito caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas diferentes")
    .required("Campo obrigatório"),
});
