import { ReactElement, useState } from "react";
import styles from "./Settings.module.css";

import Button from "../../ui/Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { getUsername, getUserToken, logout } from "../Authentication/userSlice";
import { useUpdateSettings } from "../Account/useUpdateSettings";
import { useNavigate } from "react-router-dom";
import { useDeleteAccount } from "../Account/useDeleteAccount";
import ModalConfirm from "../../ui/ModalConfirm/ModalConfirm";

type Inputs = {
  changed_password: string;
};

function Settings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const username = useAppSelector(getUsername);
  const token = useAppSelector(getUserToken);
  const dispatch = useAppDispatch();

  const { isUpdating, updateSettings } = useUpdateSettings();
  const { isDeleting, deleteAccount } = useDeleteAccount();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  function handleToggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const settings = {
      username: username,
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

  function handleDeleteAccount(e: Event) {
    e.preventDefault();

    deleteAccount(token, {
      onSuccess: () => {
        dispatch(logout());
        navigate("/");
      },
    });
  }

  return (
    <div className={styles.settingsContainer}>
      <h2 className={styles.title}>Settings</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
            <span className={styles.error}>
              {errors.changed_password && errors.changed_password?.message}
            </span>
          </>
        </Row>

        <div className={styles.buttons}>
          <Button
            type="primary"
            size="medium"
            disabled={isUpdating || isDeleting}
          >
            Save changes
          </Button>

          <Button
            type="delete"
            size="medium"
            disabled={isUpdating || isDeleting}
            onClick={handleToggleModal}
          >
            Delete Account
          </Button>
        </div>
      </form>

      {isModalOpen && (
        <ModalConfirm
          isLoading={isDeleting}
          handleAction={handleDeleteAccount}
          handleCloseModal={handleToggleModal}
        >
          <p className={styles.confirmation_text}>
            Are you sure you want to delete your account?
          </p>
        </ModalConfirm>
      )}
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
