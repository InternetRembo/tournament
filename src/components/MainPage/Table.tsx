import React, { useState } from "react";
import { StyledTable } from "../../styled/MainPage/StyledTable";
import Flex from "../../styled/helpers/Flex";
import TableItem from "./TableItem";
import { useAppSelector } from "../../redux/hooks";
import Button from "../../styled/helpers/StyledButton";
import MatchModal from "./Modal/MatchModal";

const Table = () => {
  const [modalToggler, setModalTogler] = useState(false);

  const teamList = useAppSelector(
    (state) => state.tournamentTableReducer.currentTable
  );

  console.log("teamList", teamList);
  return (
    <StyledTable>
      <Button
        onClick={() => setModalTogler(true)}
        margin="10px"
        position="relative"
        left="75%"
        border="3px solid green"
      >
        Create match
      </Button>

      {modalToggler ? <MatchModal setModalTogler={setModalTogler} /> : null}

      <Flex direction="column">
        {teamList.map((el, index) => {
          return <TableItem key={el.name} data={el} position={index + 1} />;
        })}
      </Flex>
    </StyledTable>
  );
};

export default Table;
