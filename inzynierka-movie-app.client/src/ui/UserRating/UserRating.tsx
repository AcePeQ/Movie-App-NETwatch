import { useState } from "react";
import styles from "./UserRating.module.css";

import { RiStarSFill } from "react-icons/ri";

function UserRating({
  defaultRating,
  onSetRating,
}: {
  defaultRating: number;
  onSetRating: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [rating, setRating] = useState(defaultRating);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const stars = Array(10).fill(0);

  return (
    <div className={styles.rating_wrapper}>
      <div className={styles.rating}>
        {[
          ...stars.map((_, index) => {
            const currentRating = index + 1;

            return (
              <label key={index}>
                <input
                  className={styles.input_radio}
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onChange={() => setRating(currentRating)}
                />
                <span
                  className={styles.star}
                  style={{
                    color:
                      currentRating <= (hoverRating || rating)
                        ? "var(--accent-100)"
                        : "var(--background-300)",
                  }}
                  onMouseEnter={() => setHoverRating(currentRating)}
                  onMouseLeave={() => setHoverRating(null)}
                  onClick={() => {
                    setRating(currentRating);
                    onSetRating(currentRating);
                  }}
                >
                  <RiStarSFill />
                </span>
              </label>
            );
          }),
        ]}
      </div>
      <p className={styles.user_rating}>{rating}</p>
    </div>
  );
}

export default UserRating;
