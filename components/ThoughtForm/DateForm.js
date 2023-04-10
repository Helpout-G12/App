import React, { useState } from "react";
import { Button, FormControl, Input, Text } from "native-base";
import DateTimePicker from '@react-native-community/datetimepicker'; // There is no native-base equivalent for this component and it does not work on web

export default function DateForm ({ questionText, onChange, input }) {
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  return (
    <FormControl>
      <FormControl.Label mb={3}>
        {questionText}
      </FormControl.Label>
      <Button>{input || "Pick a date"}</Button>
      <DateTimePicker
        disabled={!datePickerVisible}
        onChange={onChange}
        value={input || new Date()}
        />
    </FormControl>
  );
};