import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: 20,
		margin: 10
	}
}));

const Exercises = () => {
	const classes = useStyles();
	return (
		<Grid container className={classes.root}>
			<Grid item xs={6}>
				<Paper className={classes.paper}>Left Pane</Paper>
			</Grid>
			<Grid item xs={6}>
				<Paper className={classes.paper}>Right Pane</Paper>
			</Grid>
		</Grid>
	);
};

export default Exercises;
