import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Tabs, Tab } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		flexGrow: 1
	}
});

const Footer = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	function handleChange(event, newValue) {
		setValue(newValue);
	}
	return (
		<Paper className={classes.root}>
			<Tabs
				value={value}
				onChange={handleChange}
				indicatorColor='primary'
				textColor='primary'
				centered>
				<Tab label='Item one' />
				<Tab label='Item two' />
				<Tab label='Item three' />
			</Tabs>
		</Paper>
	);
};

export default Footer;
