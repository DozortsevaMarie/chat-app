import React from "react";
import {Button} from "antd";


const BaseButton = ({props, children}) => {
	return (
		<Button {...props} style={{
			height: "56px",
			textTransform: "uppercase",
			fontWeight: "500",
			letterSpacing: "0.1px",
			fontSize: "14px",
			width: "100%"
		}}>{children}</Button>
	)
}

export default BaseButton;