import { FormControl, Input } from "native-base";

const TextForm = ({ questionText, placeholderText, onChange, input }) => {
  return (
    <FormControl>
      <FormControl.Label as="h3" className="mb-3">
        {questionText}
      </FormControl.Label>
      <Input
        id="forms-bg-color"
        opacity={0.75}
        h={12}
        multiline={true}
        onChange={onChange}
        value={input || ""}
        placeholder={placeholderText}
      />
    </FormControl>
  );
};

export default TextForm;
