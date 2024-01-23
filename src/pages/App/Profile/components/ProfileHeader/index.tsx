import styles from "./styles.module.css";
import avatar from "../../../../../assets/avatar.png";
import { BaseUser } from "../../../../../models/User";
import { Button, Flex, Image } from "@chakra-ui/react";

type Props = {
  data: BaseUser;
  onPressEdit: () => void;
  onPressCreate: () => void;
};

const ProfileHeader = ({ data, onPressEdit, onPressCreate }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoAndName}>
        <div>
          <Image
            src={data.profilepic || avatar}
            alt="avatar"
            className={styles.avatar}
          />
        </div>
        <div>
          <p>{data.name}</p>
          <p>@{data.username}</p>
        </div>
      </div>
      <Flex>
        {data?.isOng ? (
          <Button
            display={"flex"}
            top={"2rem"}
            bg="custom.purple100"
            _hover={{
              bg: "custom.purple200",
            }}
            pl={"3vw"}
            pr={"3vw"}
            color={"white"}
            mr={"2vw"}
            onClick={onPressCreate}
          >
            Criar Post
          </Button>
        ) : (
          <></>
        )}

        <div className={styles.buttons} onClick={onPressEdit}>
          <button type="button">Editar Perfil</button>
        </div>
      </Flex>
    </div>
  );
};

export default ProfileHeader;
