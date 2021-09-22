import React, {FC} from "react";
import {message} from "antd";

const Toast: FC<any> = ({text}) => {
    return <div>{message.success(text)}</div>;
};

export default Toast;
