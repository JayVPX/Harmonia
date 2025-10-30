import {
  Card,
  Image,
  ImageContainer,
  Text,
  TextContainer,
  Title,
} from "./styled";

interface Props {
  image: string;
  user: string;
  nome: string;
  onPress: () => void;
}

export function PlaylistCard({ image, nome, user, onPress }: Props) {
  return (
    <Card onClick={onPress}>
      <ImageContainer>
        <Image src={image} alt={nome} />
      </ImageContainer>
      <TextContainer>
        <Title>{nome}</Title>
        <Text>de {user}</Text>
      </TextContainer>
    </Card>
  );
}
