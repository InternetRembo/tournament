import React from "react";
import Flex from "../../styled/helpers/Flex";
import { StyledBox } from "../../styled/helpers/Box";
import Text from "../../styled/helpers/Text";
import { StyledTableItem } from "../../styled/MainPage/StyledTableItem";
import { LeagueType } from "../../redux/types/tournamentTableTypes";

type TableItemProps = {
  data: LeagueType;
  position: number;
};

const TableItem = ({ data, position }: TableItemProps) => {
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
      <Flex>
        <Text weight="bold" size="24px" margin="0 5px">
          {position}
        </Text>
        <Flex aling="center" justify="center" width="100px" margin="0 5px">
          <img alt={"error"} style={{ width: "30px" }} src={data.img} />
        </Flex>
        <StyledBox>
          <Text weight="bold"> {data.name} </Text>
        </StyledBox>

        <Flex justify="end">
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
    </StyledTableItem>
  );
};

export default TableItem;
