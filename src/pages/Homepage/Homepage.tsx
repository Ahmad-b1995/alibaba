import { useEffect, useState } from "react";
import styled from "styled-components";
import { Card, Loader, Search, Sort } from "../../components";
import { getCountries } from "../../services/http";
import { Country } from "../../types";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4.5rem;
  @media (max-width: ${1200}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${992}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${768}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
  @media (max-width: ${768}px) {
    flex-direction: column;
    gap: 2.5rem;
    align-items: flex-start;
  }
`;

function Homepage() {
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  const [countries, setcountries] = useState<Country[]>([]);

  useEffect(() => {
    getCountries().then((countries: any) => {
      setAllCountries(countries.data);
    });
  }, []);

  return (
    <>
      {!allCountries.length ? (
        <Loader />
      ) : (
        <>
          <Toolbar>
            <Search
              countries={allCountries}
              onSearch={(countries) => setcountries(countries)}
            />
            {countries.length && (
              <Sort
                countries={countries}
                onSort={(countries) => setcountries(countries)}
              />
            )}
          </Toolbar>
          {countries.length ? (
            <Grid>
              {countries.map((country: Country) => (
                <Card key={country.name} country={country} />
              ))}
            </Grid>
          ) : (
            "No results found!"
          )}
        </>
      )}
    </>
  );
}

export default Homepage;
