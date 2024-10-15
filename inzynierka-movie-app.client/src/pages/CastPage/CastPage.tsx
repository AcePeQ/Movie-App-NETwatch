import { useParams } from "react-router-dom";
import styles from "./CastPage.module.css";
import { useCredits } from "../../features/Credits/useCredits";
import Loading from "../../ui/Loading/Loading";
import ErrorFull from "../../ui/Error/ErrorFullPage/ErrorFullPage";
import Credits from "../../features/Credits/Credits";

function CastPage() {
  const { type, id } = useParams();
  const { data, isPending, isError, error } = useCredits(type, id);

  console.log(type, id);

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorFull error={error} />;
  }

  console.log(data);

  return (
    <div className={styles.credits_container}>
      <Credits credits={data} />
    </div>
  );
}

export default CastPage;
