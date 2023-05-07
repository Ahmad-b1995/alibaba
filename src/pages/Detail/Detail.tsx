/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getCountryByName } from "../../services/http/countries";
import { Country, Currency, Language } from "../../types";
import { FaArrowLeft } from "react-icons/fa";
import { Loader } from "../../components";

const Toolbar = styled.div`
  margin-bottom: 4rem;
`;

const BackBtn = styled.button`
  border: none;
  background-color: ${(props: any) => props.theme.element};
  box-shadow: ${(props: any) => props.theme.shadow} 0px 1px 10px 0px;
  color: ${(props: any) => props.theme.text};
  border-radius: 0.4rem;
  padding: 0.8rem 1.5rem;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  gap: 7rem;
  align-items: flex-start;
  justify-content: space-between;
  color: ${(props: any) => props.theme.text};
  @media (max-width: ${992}px) {
    flex-direction: column;
  }
`;

const CountryDetail = styled.div`
  display: flex;
  gap: 5rem;
  list-style: none;
  & h1 {
    font-size: 14px;
    display: inline;
    margin-right: 0.4rem;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  @media (max-width: ${992}px) {
    flex-direction: column;
  }
`;

const DetailColumn = styled.div`
  flex: 1;
`;

const Image = styled.img`
  flex: 1;
  width: 100%;
`;

const CountryName = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
`;

const BorderCountriesContainer = styled.div`
  margin-top: 4rem;
  width: 100%;
  & h1 {
    font-size: 14px;
    display: inline;
    @media (max-width: ${768}px) {
      display: block;
    }
  }
`;

const BorderCountries = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

const Border = styled.div`
  box-shadow: ${(props: any) => props.theme.shadow} 0px 1px 10px 0px;
  margin: 0.5rem;
  padding: 0.2rem 0.5rem;
  display: inline-block
`;

function Detail() {
  const navigate = useNavigate();
  const { name } = useParams();
  const [country, setCountry] = useState<Country>();

  useEffect(() => {
    getCountryByName(name!).then((countries: any) => {
      setCountry(countries.data[0]);
    });
  }, []);

  return (
    <>
      {!country ? (
        <Loader />
      ) : (
        <>
          <Toolbar>
            <BackBtn onClick={() => navigate(-1)}>
              <FaArrowLeft />
              back
            </BackBtn>
          </Toolbar>
          <Content>
            <Image src={country?.flags.png} alt={country?.name} />
            <DetailColumn>
              <CountryName>{country?.name}</CountryName>
              <CountryDetail>
                <div>
                  <li>
                    <h1>Native Name:</h1> {country?.nativeName}
                  </li>
                  <li>
                    <h1>Population:</h1> {country?.population}
                  </li>
                  <li>
                    <h1>Region:</h1> {country?.region}
                  </li>
                  <li>
                    <h1>Sub Region:</h1> {country?.subregion}
                  </li>
                  <li>
                    <h1>Capital:</h1> {country?.capital}
                  </li>
                </div>
                <div>
                  <li>
                    <h1>Top Level Domain:</h1>
                    {country?.topLevelDomain}
                  </li>
                  <li>
                    <h1>Currencies:</h1>
                    {country &&
                      country?.currencies.map(
                        (currency: Currency, i: number) => (
                          <div
                            key={currency.name}
                            style={{ display: "inline" }}
                          >
                            {currency.name}{" "}
                            {i + 1 === country?.currencies.length ? "" : "-"}{" "}
                          </div>
                        )
                      )}
                  </li>
                  <li>
                    <h1>Languages:</h1>
                    {country &&
                      country?.languages.map(
                        (language: Language, i: number) => (
                          <div
                            key={language.name}
                            style={{ display: "inline" }}
                          >
                            {language.name}{" "}
                            {i + 1 === country?.languages.length ? "" : "-"}{" "}
                          </div>
                        )
                      )}
                  </li>
                </div>
              </CountryDetail>
              <BorderCountriesContainer>
                <h1>Border Countries:</h1>
                <BorderCountries>
                  {country?.borders &&
                    country?.borders.map((border: string) => (
                      <Border key={border}>{border}</Border>
                    ))}
                </BorderCountries>
              </BorderCountriesContainer>
            </DetailColumn>
          </Content>
        </>
      )}
    </>
  );
}

export default Detail;
