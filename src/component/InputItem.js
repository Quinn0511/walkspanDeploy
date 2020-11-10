import React from "react";
import { Input, Form } from "antd";
// import { getCaptcha} from '../../actions/register';

const InputItem = React.forwardRef( (props, ref) => {
  // const dispatch = useDispatch();
  const { name, rules, onClick, ...rest } = props;

  return (
    <Form.Item name={name} rules={rules}>
      <Input
        ref={ref}
        {...rest}
        style={{
          borderRadius: "25px",
          width: "70%",
          alignItems: "center",
          display: "flex",
          margin: "auto",
          fontSize: "1.2rem",
        }}
      />
    </Form.Item>
  );
});

export default InputItem;