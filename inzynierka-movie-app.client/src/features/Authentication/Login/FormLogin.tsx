import { SubmitHandler, useForm } from "react-hook-form";

import { useAppSelector } from "../../../hooks/useRedux";
import { useDispatch } from "react-redux";

import FormRow from "../FormRow/FormRow";
import Button from "../../../ui/Button/Button";

import stylesGen from "../GeneralStyles.module.css";

import { HiAcademicCap } from "react-icons/hi2";
import { HiLockClosed } from "react-icons/hi2";
import {
  changeShowPassword,
  closeModalLogin,
  getShowPassword,
} from "../modalLoginSlice";
import { useLoginAccount } from "../useLoginAccount";
import { login } from "../userSlice";
import { LoginUserSlice } from "../../../utils/types";

type formValues = {
  email: string;
  password: string;
};

function FormLogin() {
  const { isLoggingIn, loginAccount } = useLoginAccount();

  const showPassword = useAppSelector(getShowPassword);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formValues>();

  function handleShowPassword(): void {
    dispatch(changeShowPassword());
  }

  const onSubmit: SubmitHandler<formValues> = (data) => {
    loginAccount(data, {
      onSuccess: (userData: LoginUserSlice) => {
        dispatch(login(userData));
        reset();
        dispatch(closeModalLogin?.());
      },
    });
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
          })}
        />
      </FormRow>

      <div className={stylesGen.btn}>
        <Button type="primary" size="medium" disabled={isLoggingIn}>
          Sign in
        </Button>
      </div>
    </form>
  );
}

export default FormLogin;
