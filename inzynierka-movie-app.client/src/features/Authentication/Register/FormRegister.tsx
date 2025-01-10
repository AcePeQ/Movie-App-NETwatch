import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../../../hooks/useRedux";
import {
  changeShowConfirmPassword,
  changeShowPassword,
  closeModalRegister,
  getShowConfirmPassword,
  getShowPassword,
} from "../modalRegisterSlice";
import { useDispatch } from "react-redux";

import FormRow from "../FormRow/FormRow";
import Button from "../../../ui/Button/Button";

import stylesGen from "../GeneralStyles.module.css";

import { HiAcademicCap } from "react-icons/hi2";
import { HiUser } from "react-icons/hi2";
import { HiLockClosed } from "react-icons/hi2";
import { HiMiniLockOpen } from "react-icons/hi2";
import { useCreateAccount } from "../useCreateAccount";

type RegisterTypes = {
  email: string;
  username: string;
  password: string;
  confirmed_password: string;
};

function FormRegister() {
  const { isCreatingAccount, createAccount } = useCreateAccount();

  const showPassword = useAppSelector(getShowPassword);
  const showConfirmPassword = useAppSelector(getShowConfirmPassword);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<RegisterTypes>();

  function handleShowPassword(): void {
    dispatch(changeShowPassword());
  }

  function handleShowConfirmPassword(): void {
    dispatch(changeShowConfirmPassword());
  }

  const onSubmit: SubmitHandler<RegisterTypes> = (data) => {
    createAccount(data, {
      onSuccess: () => {
        reset();
        dispatch(closeModalRegister());
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
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Your e-mail must be like this: something@else.tld",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Username"
        error={errors.username?.message}
        icon={<HiUser className={stylesGen.icon} />}
      >
        <input
          type="text"
          id="username"
          placeholder="Username"
          {...register("username", {
            required: "Username field is required",
            minLength: {
              value: 3,
              message: "Username should be at least 3",
            },
            maxLength: {
              value: 12,
              message: "Username should be at most 12 ",
            },
            pattern: {
              value: /^[A-Za-z][A-Za-z0-9_]{2,11}$/,
              message:
                "Username should start with an letter, all other characters can be letters, numbers or an underscore",
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
              value:
                /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*(.)\1).{8,}$/,
              message: `Your password must contain:\n
              * Minimum eight characters \n
              * At least one lower letter \n
              * At least upper letter \n
              * At least one number \n
              * At least one special character \n
              `,
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors.confirmed_password?.message}
        icon={<HiMiniLockOpen className={stylesGen.icon} />}
        showPassword={showConfirmPassword}
        passwordHandler={handleShowConfirmPassword}
      >
        <input
          type={showConfirmPassword ? "type" : "password"}
          id="confirmPassword"
          placeholder="Confirm password"
          {...register("confirmed_password", {
            required: "Confirm password field is required",
            validate: (value) =>
              value === getValues().password ||
              "Your passwords are not the same",
          })}
        />
      </FormRow>

      <div className={stylesGen.btn}>
        <Button type="primary" size="medium" disabled={isCreatingAccount}>
          Create account
        </Button>
      </div>
    </form>
  );
}

export default FormRegister;
