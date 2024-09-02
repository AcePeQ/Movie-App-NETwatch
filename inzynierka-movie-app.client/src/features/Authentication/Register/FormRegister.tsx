import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../../../hooks/useRedux";
import {
  changeShowConfirmPassword,
  changeShowPassword,
  getShowConfirmPassword,
  getShowPassword,
} from "../modalRegisterSlice";
import { useDispatch } from "react-redux";

import FormRow from "../FormRow/FormRow";
import Button from "../../../ui/Button/Button";

import stylesGen from "./GeneralStyles.module.css";

import { HiAcademicCap } from "react-icons/hi2";
import { HiUser } from "react-icons/hi2";
import { HiLockClosed } from "react-icons/hi2";
import { HiMiniLockOpen } from "react-icons/hi2";

type Inputs = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

function FormRegister() {
  const showPassword = useAppSelector(getShowPassword);
  const showConfirmPassword = useAppSelector(getShowConfirmPassword);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  function handleShowPassword(): void {
    dispatch(changeShowPassword());
  }

  function handleShowConfirmPassword(): void {
    dispatch(changeShowConfirmPassword());
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
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
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        label="Username"
        error={errors.email?.message}
        icon={<HiUser className={stylesGen.icon} />}
      >
        <input
          type="text"
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
        icon={<HiLockClosed className={stylesGen.icon} />}
        showPassword={showPassword}
        passwordHandler={handleShowPassword}
      >
        <input
          type={showPassword ? "type" : "password"}
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
        icon={<HiMiniLockOpen className={stylesGen.icon} />}
        showPassword={showConfirmPassword}
        passwordHandler={handleShowConfirmPassword}
      >
        <input
          type={showConfirmPassword ? "type" : "password"}
          id="confirmPassword"
          placeholder="Confirm password"
          {...register("confirmPassword", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <div className={stylesGen.btn}>
        <Button type="primary" size="medium">
          Create account
        </Button>
      </div>
    </form>
  );
}

export default FormRegister;
