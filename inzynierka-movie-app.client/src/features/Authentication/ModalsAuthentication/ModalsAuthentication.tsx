import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import Modal from "../../../ui/Modal/Modal";
import {
  closeModalRegister,
  getModalRegisterStatus,
} from "../modalRegisterSlice";
import FormRegister from "../Register/FormRegister";

function ModalsAuthentication() {
  const modalRegisterStatus = useAppSelector(getModalRegisterStatus);
  const dispatch = useAppDispatch();

  return (
    <>
      {modalRegisterStatus && (
        <Modal title="Sign up" onClose={() => dispatch(closeModalRegister())}>
          <FormRegister />
        </Modal>
      )}
    </>
  );
}

export default ModalsAuthentication;
