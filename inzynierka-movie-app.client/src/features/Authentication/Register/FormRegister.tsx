import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./FormRegister.module.css";
import stylesGen from "./GeneralStyles.module.css";
import FormRow from "../FormRow/FormRow";

import { HiAcademicCap } from "react-icons/hi2";
import { HiUser } from "react-icons/hi2";
import { HiKey } from "react-icons/hi2";

type Inputs = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <FormRow
        label="E-mail"
        error={errors.email?.message}
        icon={<HiAcademicCap className={styles.icon} />}
      >
        <input
          type="text"
          className={stylesGen.input}
          id="e-mail"
          placeholder="E-mail"
          {...register("email", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        label="Username"
        error={errors.email?.message}
        icon={<HiUser className={styles.icon} />}
      >
        <input
          type="text"
          className={stylesGen.input}
          id="username"
          placeholder="Username"
          {...register("username", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        label="Password"
        error={errors.email?.message}
        icon={<HiKey className={styles.icon} />}
      >
        <input
          type="password"
          className={stylesGen.input}
          id="password"
          placeholder="Password"
          {...register("password", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors.email?.message}
        icon={<HiKey className={styles.icon} />}
      >
        <input
          type="password"
          className={stylesGen.input}
          id="confirmPassword"
          placeholder="Confirm password"
          {...register("confirmPassword", {
            required: "This field is required",
          })}
        />
      </FormRow>
    </form>
  );
}

export default FormRegister;
