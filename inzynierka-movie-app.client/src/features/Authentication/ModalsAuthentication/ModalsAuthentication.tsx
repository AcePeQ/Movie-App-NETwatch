import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import Modal from "../../../ui/Modal/Modal";
import FormLogin from "../Login/FormLogin";
import { closeModalLogin, getModalLoginStatus } from "../modalLoginSlice";

import {
  closeModalRegister,
  getModalRegisterStatus,
} from "../modalRegisterSlice";
import FormRegister from "../Register/FormRegister";

function ModalsAuthentication() {
  const modalRegisterStatus = useAppSelector(getModalRegisterStatus);
  const modalLoginStatus = useAppSelector(getModalLoginStatus);

  const dispatch = useAppDispatch();

  return (
    <>
      {modalRegisterStatus && (
        <Modal title="Sign up" onClose={() => dispatch(closeModalRegister())}>
          <FormRegister />
        </Modal>
      )}

      {modalLoginStatus && (
        <Modal title="Sign in" onClose={() => dispatch(closeModalLogin())}>
          <FormLogin />
        </Modal>
      )}
    </>
  );
}

export default ModalsAuthentication;
