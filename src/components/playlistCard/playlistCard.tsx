import {
  Card,
  Image,
  ImageContainer,
  Text,
  TextContainer,
  Title,
  TrashButton,
  TrashContainer,
} from "./styled";
import { Trash2 } from "lucide-react";

interface Props {
  image: string;
  user: string;
  nome: string;
  onPress: () => void;
  isRemovable?: boolean;
  onTrashClick?: () => {};
}

export function PlaylistCard({
  image,
  nome,
  user,
  onPress,
  isRemovable = false,
  onTrashClick,
}: Props) {
  return (
    <Card onClick={onPress}>
      <ImageContainer>
        <Image src={image} alt={nome} />
      </ImageContainer>
      <TextContainer>
        <Title>{nome}</Title>
        {!isRemovable && <Text>de {user}</Text>}
        {isRemovable && (
          <TrashContainer>
            <TrashButton
              onClick={(e) => {
                e.stopPropagation(); // impede o clique no Card
                onTrashClick && onTrashClick();
              }}
            >
              <Trash2 color="white" size={20} />
            </TrashButton>
          </TrashContainer>
        )}
      </TextContainer>
    </Card>
  );
}
