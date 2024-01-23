import styles from "./styles.module.css";
import ongIcon from "../../../../../assets/ong-icon.png";
import { User } from "../../../../../models/User";

type Props = {
  suggestedNGOS: User[] | never;
  onClickNGO: (ongId: number) => void;
};

const NGOSugestions = ({ suggestedNGOS, onClickNGO }: Props) => {
  return (
    <div className={styles.container}>
      <h3 className="subtitle">Sugestões de ONGs</h3>
      <ul>
        {suggestedNGOS.map((suggestion) => (
          <li>
            <div onClick={() => onClickNGO(suggestion.id)}>
              <img
                src={suggestion.profilepic || ongIcon}
                alt="ong"
                width="32"
                height="32"
              />
            </div>
            <div>
              <p>{suggestion.name}</p>
              <span>@{suggestion.username}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NGOSugestions;
