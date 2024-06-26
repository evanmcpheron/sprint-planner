import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { enterRoom } from "../redux/actions/user";

const GenerateRoom = ({ enterRoom }) => {
  const roomId = uuid();
  return (
    <div className={"instructions-container"}>
      <Button
        variant={"contained"}
        component={Link}
        to={roomId}
        onClick={() => enterRoom(roomId)}
        className={"instructions-container-button"}
      >
        Generate Room
      </Button>
      <Typography className={"instructions-container-text"}>
        To view the admin version, append <code>?admin=true</code> to the end of
        the URL in the voting screen.
      </Typography>
    </div>
  );
};

GenerateRoom.propTypes = {
  enterRoom: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { enterRoom })(GenerateRoom);
