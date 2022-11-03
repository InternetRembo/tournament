import { Form } from "react-bootstrap";
import React, { Dispatch, SetStateAction, useState } from "react";
import { LeagueType } from "../../../redux/types/tournamentTableTypes";

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
  );
};
export default CorrectorArea;
