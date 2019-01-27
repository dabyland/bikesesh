import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    width: "50%",
    marginTop: "12px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

function SimpleExpansionPanel(props) {
  const { classes, trails } = props;

  return (
    <div className={classes.root}>
      {trails &&
        trails.map(trail => (
          <ExpansionPanel key={trail.id}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography key={trail.id} className={classes.heading}>
                {trail.name + " - " + trail.location}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Trail Information:
                <li>Condition Status: {trail.conditionStatus}</li>
                <li>Condition Details: {trail.conditionDetails}</li>
                <li>Last Checked: {trail.conditionDate}</li>
                <li>Difficulty: {trail.difficulty}</li>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  trails: PropTypes.array
};

export default withStyles(styles)(SimpleExpansionPanel);
