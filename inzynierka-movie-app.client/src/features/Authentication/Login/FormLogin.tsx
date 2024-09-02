import { SubmitHandler, useForm } from "react-hook-form";

import { useAppSelector } from "../../../hooks/useRedux";
import { useDispatch } from "react-redux";

import FormRow from "../FormRow/FormRow";
import Button from "../../../ui/Button/Button";

import stylesGen from "../GeneralStyles.module.css";

import { HiAcademicCap } from "react-icons/hi2";
import { HiLockClosed } from "react-icons/hi2";
import { changeShowPassword, getShowPassword } from "../modalLoginSlice";

type Inputs = {
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
  } = useForm<Inputs>();

  function handleShowPassword(): void {
    dispatch(changeShowPassword());
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

      <div className={stylesGen.btn}>
        <Button type="primary" size="medium">
          Sign in
        </Button>
      </div>
    </form>
  );
}

export default FormLogin;
