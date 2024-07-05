import { countVotes } from "../services/countVotes";
import { Box } from "@mui/material";

const VotesScore = ({ votes, roomId, visible }) => {

  const score = countVotes(votes, roomId);
  return <Box>{visible ? score : "--"} Points</Box>;
};

export default VotesScore;
