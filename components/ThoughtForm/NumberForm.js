import { FormControl, Container, Text, Spacer, Input } from "native-base";

const NumberForm = ({ questionText, onChange, input }) => {
  return (
    <FormControl>
      <FormControl.Label pb={5} mb={5}>
        {questionText}
      </FormControl.Label>
      <Container className="d-flex flex-column justify-content-between">
        <Text>{`${input}%`}</Text>
        <Container flex={1} flexDir="row" mb={3}>
          <Text>0%</Text>
          <Spacer />
          <Input
            type="range"
            className="form-range"
            onChange={onChange}
            value={input || ""}
            style={{ border: "none" }}
          />
          <Spacer />
          <Text>100%</Text>
        </Container>
      </Container>
    </FormControl>
  );
};

export default NumberForm;
