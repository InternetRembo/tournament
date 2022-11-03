import React, { Dispatch, SetStateAction, useState } from "react";
import { StyledBox } from "../../../styled/helpers/Box";
import Flex from "../../../styled/helpers/Flex";
import { Form } from "react-bootstrap";
import { TeamResults } from "./MatchModal";
import { useAppSelector } from "../../../redux/hooks";

type MatchResultFormProps = {
  setResult: Dispatch<SetStateAction<TeamResults>>;
  result: TeamResults;
};

const MatchResultForm = ({ result, setResult }: MatchResultFormProps) => {
  const teamList = useAppSelector(
    (state) => state.tournamentTableReducer.currentTable
  );

  const [team, setTeam] = useState<number | string>(0);

  return (
    <StyledBox width="600px" height="200px">
      <Flex width="600px" justify="space-around">
        <Form.Select
          value={team}
          onChange={(e) => {
            setTeam(e.target.value);
            setResult({ ...result, name: e.target.value });
          }}
          style={{ width: "40%", minHeight: "40px" }}
          size="lg"
          className="mb-3"
          aria-label="Select a team"
        >
          <option>Сhoose a team</option>
          {teamList.map((el) => {
            return (
              <option value={el.name} key={el.name}>
                {el.name}
              </option>
            );
          })}
        </Form.Select>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onChange={(e) => {
              setResult({ ...result, score: e.target.value });
            }}
            type="number"
            style={{
              fontSize: "24px",
              textAlign: "center",
              width: "50px",
              minHeight: "40px",
            }}
          />
        </Form.Group>
      </Flex>
    </StyledBox>
  );
};
export default MatchResultForm;
