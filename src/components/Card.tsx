import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Country } from "../types";

interface Props {
  country: Country;
}

const CardElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-item: space-between;
  box-shadow: ${(props: any) => props.theme.shadow} 0px 1px 10px 0px;
  background-color: ${(props: any) => props.theme.element};
  border-radius: 0.4rem;
  overflow: hidden;
  cursor: pointer;
  transition: .2s;
  &:hover {
    transform: scale(1.02);
  }
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 4:3;
  overflow: hidden;
  object-fit: cover;
`;

const Ul = styled.ul`
  padding: 2rem;
  list-style: none;
  & li:first-child {
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 16px;
    color: ${(props: any) => props.theme.text};
  }
  & li {
    margin: 0.5rem 0;
    font-weight: 300;
    color: ${(props: any) => props.theme.text};
  }
  & li h2 {
    font-size: 14px;
    display: inline;
    font-weight: 600;
    margin-right: 0.3rem;
    color: ${(props: any) => props.theme.text};
  }
`;
function Card({ country }: Props) {
  const navigate = useNavigate();

  const navigateToDetailPage = (country: Country) => {
    navigate(`/${country.name}`, { state: country });
  };

  return (
    <CardElement onClick={() => navigateToDetailPage(country)}>
      <Image src={country.flags.png} alt={country.name} />
      <Ul>
        <li>{country.name}</li>
        <li>
          <h2>Populaton:</h2>
          {country.population}
        </li>
        <li>
          <h2>Region:</h2>
          {country.region}
        </li>
        <li>
          <h2>Capital:</h2>
          {country.capital}
        </li>
      </Ul>
    </CardElement>
  );
}

export default Card;
