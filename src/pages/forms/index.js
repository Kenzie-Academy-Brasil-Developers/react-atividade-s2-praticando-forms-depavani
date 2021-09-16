import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles.css";

const Forms = () => {
  const formSchema = yup.object().shape({
    fullName: yup.string().required("NOME COMPLETO OBRIGATÓRIO"),
    userName: yup
      .string()
      .required("USER NAME OBRIGATÓRIO")
      .max(18, "O USER NAME PODE TER NO MÁXIMO 18 CARACTERES"),
    email: yup.string().required("EMAIL OBRIGATÓRIO").email("EMAIL INVÁLIDO"),
    checkingEmail: yup
      .string()
      .oneOf([yup.ref("email"), null], "EMAIL NÃO CORRESPONDE"),
    password: yup
      .string()
      .required("SENHA OBRIGATÓRIA")
      .matches(
        "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*.).{4,}$",
        "SENHA INVÁLIDA"
      ),
    checkingPassword: yup
      .string()
      .oneOf([yup.ref("password")], "A SENHA NÃO CORRESPONDE"),
    phone: yup
      .string()
      .required("TELEFONE OBRIGATÓRIO")
      .matches(
        "(\\(?[0]?[1-9][0-9]\\)?)(\\.|\\-|\\s)?([9]{1})?[6-9][0-9]{3}(\\.|\\-|\\s)?[0-9]{4}",
        "TELEFONE INVÁLIDO"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => console.log(data);

  /*const goToPageCard = () => {
    history.push("/card");
  };*/

  return (
    <div className="container">
      <h1>CADASTRO</h1>
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <div className="input">
          <input placeholder="NOME COMPLETO*" {...register("fullName")} />
          {<span>{errors.fullName?.message}</span>}
        </div>
        <div className="input">
          <input placeholder="NOME DE USUÁRIO*" {...register("userName")} />
          {<span>{errors.userName?.message}</span>}
        </div>
        <div className="input">
          <input placeholder="EMAIL*" {...register("email")} />
          {<span>{errors.email?.message}</span>}
        </div>
        <div className="input">
          <input
            placeholder="CONFIRME SEU EMAIL*"
            {...register("checkingEmail")}
          />
          {<span>{errors.checkingEmail?.message}</span>}
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="SENHA*"
            {...register("password")}
          />
          {<span>{errors.password?.message}</span>}
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="CONFIRME SUA SENHA*"
            {...register("checkingPassword")}
          />
          {<span>{errors.checkingPassword?.message}</span>}
        </div>
        <div className="input">
          <input placeholder="TELEFONE*" {...register("phoneNumber")} />
          {<span>{errors.phoneNumber?.message}</span>}
        </div>
        <div className="btn">
          <button /*onClick={goToPageCard}*/ type="submit">AVANÇAR</button>
        </div>
      </form>
    </div>
  );
};
export default Forms;
