import { ReactElement } from "react";
import styles from "./Settings.module.css";
import Avatar from "../../ui/Avatar/Avatar";
import Button from "../../ui/Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { getUser, getUserToken, logout } from "../Authentication/userSlice";
import { useUpdateSettings } from "../Account/useGetSettings";
import { useNavigate } from "react-router-dom";

type Inputs = {
  changed_password: string;
};

function Settings() {
  const navigate = useNavigate();

  const user = useAppSelector(getUser);
  const token = useAppSelector(getUserToken);
  const dispatch = useAppDispatch();

  const { isUpdating, updateSettings } = useUpdateSettings();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const settings = {
      username: user?.username,
      id: user?.id,
      password: data.changed_password,
    };

    updateSettings(
      { settings, token },
      {
        onSuccess: () => {
          dispatch(logout());
          navigate("/");
        },
      }
    );
  };

  return (
    <div className={styles.settingsContainer}>
      <h2 className={styles.title}>Settings</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Row name="Profile picture">
          <>
            <Avatar type="settings" />
            <Button type="primary" size="small">
              Upload
            </Button>
          </>
        </Row>

        <Row name="Change password">
          <>
            <input
              type="text"
              id="passwordChange"
              placeholder="Password"
              {...register("changed_password", {
                required: "This field is required",
              })}
            />
            {errors.changed_password && errors.changed_password?.message}
          </>
        </Row>

        <div className={styles.buttons}>
          <Button type="primary" size="medium" disabled={isUpdating}>
            Save changes
          </Button>

          <Button type="delete" size="medium" disabled={isUpdating}>
            Delete Account
          </Button>
        </div>
      </form>
    </div>
  );
}

interface RowPropsType {
  name: string;
  children: ReactElement;
}

function Row({ name, children }: RowPropsType) {
  return (
    <div className={styles.row}>
      <p className={styles.settingName}>{name}</p>
      <div className={styles.setting}>{children}</div>
    </div>
  );
}

export default Settings;
