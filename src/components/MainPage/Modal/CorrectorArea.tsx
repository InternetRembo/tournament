import { Form } from "react-bootstrap";
import React, { Dispatch, SetStateAction, useState } from "react";
import { LeagueType } from "../../../redux/types/tournamentTableTypes";
import Text from "../../../styled/helpers/Text";
import Flex from "../../../styled/helpers/Flex";

type CorrectorAreaProps = {
  title: string;
  value: number;
  parameter: string;
  setUpdatedTeamData: Dispatch<SetStateAction<LeagueType>>;
  updatedTeamData: LeagueType;
};

const CorrectorArea = ({
  title,
  value,
  parameter,
  setUpdatedTeamData,
  updatedTeamData,
}: CorrectorAreaProps) => {
  const [areaValue, setAreaValue] = useState<number>(value);
  return (
    <Flex aling="center" direction="column">
      <Text size="28px" color="white">
        {title}
      </Text>
      <Form.Control
        onChange={(e) => {
          setAreaValue(+e.target.value);
          setUpdatedTeamData({
            ...updatedTeamData,
            [`${parameter}`]: +e.target.value,
          });
          console.log("updatedTeamData", updatedTeamData);
        }}
        value={areaValue}
        placeholder={title}
        type="number"
        style={{
          fontSize: "24px",
          textAlign: "center",
          width: "50px",
          minHeight: "40px",
        }}
      />
    </Flex>
  );
};
export default CorrectorArea;
