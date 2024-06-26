import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addUser, enterRoom } from "../redux/actions/user";

const AddUser = ({ enterRoom, addUser }) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const { roomId, userId } = useParams();
  const id = userId || uuid();

  const onLoad = () => {
    enterRoom(roomId);
    const localName = localStorage.getItem("currentUser");
    if (localName) {
      const localUser = JSON.parse(localName);
      addUser(localUser.name, localUser.id);

      return navigate(`/${id}/${roomId}`);
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  const handleSubmit = useCallback(() => {
    localStorage.setItem("currentUser", JSON.stringify({ name, id }));
    addUser(name, id, roomId);
    return navigate(`/${id}/${roomId}`);
  }, [name]);

  const handleChange = (letters) => {
    setName(letters);
  };

  return (
    <div className={"add-user-container"}>
      <TextField
        id="filled-basic"
        value={name}
        onChange={(e) => handleChange(e.target.value)}
        label="User Name"
        className={"add-user-input"}
        variant="filled"
      />
      <Button
        className={"add-user-button"}
        variant={"contained"}
        onClick={handleSubmit}
      >
        Add User
      </Button>
    </div>
  );
};

AddUser.propTypes = {
  enterRoom: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { enterRoom, addUser })(AddUser);
