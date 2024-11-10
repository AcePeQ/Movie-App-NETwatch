import { SubmitHandler, useForm } from "react-hook-form";

import { useAppSelector } from "../../../hooks/useRedux";
import { useDispatch } from "react-redux";

import FormRow from "../FormRow/FormRow";
import Button from "../../../ui/Button/Button";

import stylesGen from "../GeneralStyles.module.css";

import { HiAcademicCap } from "react-icons/hi2";
import { HiLockClosed } from "react-icons/hi2";
import { changeShowPassword, getShowPassword } from "../modalLoginSlice";

type formValues = {
  email: string;
  password: string;
};

function FormLogin() {
  const showPassword = useAppSelector(getShowPassword);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>();

  function handleShowPassword(): void {
    dispatch(changeShowPassword());
  }

  const onSubmit: SubmitHandler<formValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="E-mail"
        error={errors.email?.message}
        icon={<HiAcademicCap className={stylesGen.icon} />}
      >
        <input
          type="text"
          id="e-mail"
          placeholder="E-mail"
          {...register("email", {
            required: "E-mail field is required",
            pattern: {
              value: /[^@\s]+@[^@\s]+\.[^@\s]+/,
              message: "Your e-mail must be like this: something@else.tld",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password"
        error={errors.password?.message}
        icon={<HiLockClosed className={stylesGen.icon} />}
        showPassword={showPassword}
        passwordHandler={handleShowPassword}
      >
        <input
          type={showPassword ? "type" : "password"}
          id="password"
          placeholder="Password"
          {...register("password", {
            required: "Password field is required",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              message: `Your password must contain:\n
              * Minimum eight characters \n
              * At least one letter \n
              * At least one number \n
              * At least one special character \n
              `,
            },
          })}
        />
      </FormRow>

      <div className={stylesGen.btn}>
        <Button type="primary" size="medium">
          Sign in
        </Button>
      </div>
    </form>
  );
}

export default FormLogin;
