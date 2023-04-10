import { FormControl, Input } from 'native-base';

const TimeForm = ({ questionText, onChange, input }) => {
  return (
    <FormControl>
      <FormControl.Label>{questionText}</FormControl.Label>
      <Input
        size="lg"
        id="forms-bg-color"
        className="opacity-75"
        type="time"
        onChange={onChange}
        value={input || ""}
        m={2}
        w='full'
        h={12}
      />
    </FormControl>
      
  );
};

export default TimeForm;
