import { Form } from "react-bootstrap";
import React, { useState } from "react";

type CorrectorAreaProps = {
  title: string;
  indication: number;
};

const CorrectorArea = ({ title, indication }: CorrectorAreaProps) => {
  const [areaValue, setAreaValue] = useState<number | string>(indication);
  return (
    <Form.Control
      onChange={(e) => {
        setAreaValue(e.target.value);
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
