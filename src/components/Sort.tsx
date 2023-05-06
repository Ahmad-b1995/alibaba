/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Country } from "../types";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  countries: Country[];
  onSort: (countries: Country[]) => void;
}

const DropDown = styled.div`
  position: relative;
`;

const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 140px;
  overflow: hidden;
  border-radius: 0.4rem;
  padding: 1rem 1.5rem;
  background-color: ${(props: any) => props.theme.element};
  color: ${(props: any) => props.theme.text};
  border-radius: 0.4rem;
  box-shadow: ${(props: any) => props.theme.shadow} 0px 1px 5px 0px;
  cursor: pointer;
`;

const Options = styled.ul`
  position: absolute;
  background-color: white;
  width: 50px;
  width: 140px;
  margin-top: 0.5rem;
  background-color: ${(props: any) => props.theme.element};
  color: ${(props: any) => props.theme.text};
  box-shadow: ${(props: any) => props.theme.shadow} 0px 1px 5px 0px;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 1.5rem;
  gap: 1rem;
  list-style: none;
  z-index: 100;
  li {
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;
  }
`;

function Sort({ countries, onSort }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState<string>("Name");
  const [dropDown, setdropDown] = useState<boolean>(false);

  useEffect(() => {
    if (countries.length > 0 && searchParams.get("sort")) {
      sort(searchParams.get("sort")!);
    }
  }, []);

  const sort = (type: string) => {
    setSortBy(type);
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set("sort", type);
    setSearchParams(updatedSearchParams.toString());
    let sortedCountries: Country[] = [];
    if (type === "Name") {
      sortedCountries = countries.sort((a: Country, b: Country) =>
        a.name > b.name ? 1 : -1
      );
    } else {
      sortedCountries = countries.sort(
        (a: Country, b: Country) => a.population - b.population
      );
    }
    onSort([...sortedCountries]);
  };

  return (
    // <select
    //   name="sort"
    //   id="sort"
    //   value={sortBy}
    //   onChange={(event) => sort(event.target.value)}
    // >
    //   <option value="name">name</option>
    //   <option value="population">population</option>
    // </select>
    <DropDown>
      <Select onClick={() => setdropDown((dropDown) => !dropDown)}>
        {sortBy}
        <FaChevronDown />
      </Select>
      {dropDown && (
        <Options>
          <li
            onClick={() => {
              sort("Population");
              setdropDown((dropDown) => !dropDown);
            }}
          >
            Population
          </li>
          <li
            onClick={() => {
              sort("Name");
              setdropDown((dropDown) => !dropDown);
            }}
          >
            name
          </li>
        </Options>
      )}
    </DropDown>
  );
}

export default Sort;
