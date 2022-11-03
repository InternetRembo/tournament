import React, { Dispatch, SetStateAction } from "react";
import Flex from "../../styled/helpers/Flex";
import { StyledBox } from "../../styled/helpers/Box";
import Text from "../../styled/helpers/Text";
import { StyledTableItem } from "../../styled/MainPage/StyledTableItem";
import { LeagueType } from "../../redux/types/tournamentTableTypes";
import Button from "../../styled/helpers/StyledButton";

type TableItemProps = {
  data: LeagueType;
  position: number;
  setCorrectorModalToggler: Dispatch<SetStateAction<boolean>>;
  setCorrectingTeam: Dispatch<SetStateAction<LeagueType>>;
};

const TableItem = ({
  data,
  position,
  setCorrectorModalToggler,
  setCorrectingTeam,
}: TableItemProps) => {
  const backgroundOfRow = () => {
    if (position === 1) {
      return "rgba(255, 217, 0, 0.8)";
    }
    if (position > 1 && position <= 4) {
      return "rgba(154,205,50,0.79)";
    }
    return "rgb(203,201,201)";
  };
  return (
    <StyledTableItem bgColor={backgroundOfRow()}>
      <Flex aling="center">
        <Text weight="bold" size="24px" margin="0 5px">
          {position}
        </Text>
        <Flex aling="center" justify="center" width="100px" margin="0 5px">
          <img alt={"error"} style={{ width: "30px" }} src={data.img} />
        </Flex>
        <StyledBox>
          <Text weight="bold"> {data.name} </Text>
        </StyledBox>

        <Flex aling="center" justify="end">
          <Button
            onClick={() => {
              console.log("data", data);
              setCorrectingTeam(data);
              setCorrectorModalToggler(true);
            }}
            shadow="4px 4px 4px #777777"
            color="#333333"
            fontSize="28px"
            hoverColor="#f2f2f2"
            width="40px"
            height="40px"
            margin="2px 0"
          >
            <i className="bi bi-pencil-square" />
          </Button>

          <Flex justify="end" width="240px">
            <Text size="22px" margin="0 10px">
              {data.games}
            </Text>
            <Text size="22px" margin="0 10px">
              {data.win}
            </Text>
            <Text size="22px" margin="0 10px">
              {data.loss}
            </Text>
            <Text size="22px" margin=" 0 10px">
              {data.draw}
            </Text>
            <Text size="22px" margin="0 10px">
              {data.goalsDifference}
            </Text>
            <Text size="22px" margin="0 10px">
              {data.points}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </StyledTableItem>
  );
};

export default TableItem;
