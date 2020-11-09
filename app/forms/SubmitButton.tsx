import React from "react";
import { useFormikContext } from "formik";

import { Button } from "@ui-kitten/components";


function SubmitButton({ title ,...otherProps}) {
  const { handleSubmit } = useFormikContext();

  return <Button  onPress={handleSubmit} 
    {...otherProps}>
    {title}
    </Button>;
}

export default SubmitButton;
