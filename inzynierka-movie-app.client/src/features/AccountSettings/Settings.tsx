import { ReactElement } from "react";
import styles from "./Settings.module.css";
import Avatar from "../../ui/Avatar/Avatar";
import Button from "../../ui/Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  changePassword: string;
};

function Settings() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
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
              {...register("changePassword", {
                required: "This field is required",
              })}
            />
            {errors.changePassword && errors.changePassword?.message}
          </>
        </Row>

        <div className={styles.buttons}>
          <Button type="primary" size="medium">
            Save changes
          </Button>

          <Button type="delete" size="medium">
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
