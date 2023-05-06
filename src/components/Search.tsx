import { useEffect, useState } from "react";
import {  useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Country } from "../types";
import { FaSearch } from "react-icons/fa";

interface Props {
  countries: Country[];
  onSearch: (countries: Country[]) => void;
}

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: ${(props: any) => props.theme.element};
  color: ${(props: any) => props.theme.text};
  border-radius: 0.4rem;
  padding-left: 1.5rem;
  box-shadow: ${(props: any) => props.theme.shadow} 0px 1px 5px 0px;
  @media (max-width: ${1200}px) {
    width: 40%;
  }
  @media (max-width: ${992}px) {
    width: 60%;
  }
  @media (max-width: ${768}px) {
    width: 100%;
  }
`;

const TextInput = styled.input`
  border: none;
  width: 100%;
  padding: 1rem;
  outline: none;
  border-radius: 1rem;
  outline: none;
  background-color: ${(props: any) => props.theme.element};
  color: ${(props: any) => props.theme.text};
`;

function Search({ countries, onSearch }: Props) {
  const [searchTerm, setsearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (countries.length > 0) {
      handleSearch(searchParams.get("query") || "");
    }
  });

  const handleSearch = (input: string): void => {
    setsearchTerm(input);
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set("query", input);
    setSearchParams(updatedSearchParams.toString());
    const searchResults = countries.filter((item: Country) => {
      let regexString = "";
      input.split("").forEach((char) => (regexString += char + ".*"));
      const rgx = new RegExp(regexString, "i");
      return item.name.match(rgx);
    });
    onSearch(searchResults);
  };

  return (
    <SearchContainer>
      <FaSearch  />
      <TextInput
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(event) => handleSearch(event.target.value)}
      />
    </SearchContainer>
  );
}

export default Search;
