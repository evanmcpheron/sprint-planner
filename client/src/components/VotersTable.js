import * as React from 'react'
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
} from '@mui/material'
import { useState, useContext, useEffect } from 'react'
import { Check, Close } from '@mui/icons-material'
import { useParams, useSearchParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { countVotes } from '../services/countVotes'
import { addUserToList } from '../redux/actions/votes'
import VotesScore from './VotesScore'
import { SocketContext } from '../context/socket'
import { resetUserVotes } from '../redux/actions/user'

const VotersTable = ({ votes, addUserToList, resetUserVotes }) => {
  const [visible, setVisible] = useState(false)
  const { roomId } = useParams()
  const [searchParams] = useSearchParams()
  const isAdmin = searchParams.get('admin')
  const socket = useContext(SocketContext)

  const visibleUsers = () => {
    return votes.filter((user) => user.room === roomId)
  }

  const handlePointVisibility = () => {
    socket.emit('change-point-visibility', !visible, roomId)
  }

  const handleResetScores = () => {
    socket.emit('reset-scores', roomId)
    socket.emit('change-point-visibility', false, roomId)
  }

  useEffect(() => {
    socket.on('change-point-visibility', (visibility) => {
      setVisible(visibility)
    })
    socket.on('reset-scores', (users) => {
      resetUserVotes()
      addUserToList(users)
    })
  }, [addUserToList, resetUserVotes, socket, visible])

  const parseData = (data) => {
    if (visible) {
      switch (data) {
        case 'N/A':
          return <Typography>N/A</Typography>
        case 'LOW':
          return <Typography sx={{ color: 'lightgreen' }}>LOW</Typography>
        case 'MEDIUM':
          return <Typography sx={{ color: 'orange' }}>MEDIUM</Typography>
        case 'HIGH':
          return <Typography sx={{ color: 'red' }}>HIGH</Typography>
        case 'EPIC':
          return <Typography className="epic">EPIC</Typography>
        case 'NOT VOTING':
          return <Typography sx={{ color: 'cyan' }}>NOT VOTING</Typography>
        default:
          return
      }
    }

    return (
      <>
        {data === 'N/A' ? (
          <Close color={'error'} />
        ) : (
          <Check color={'success'} />
        )}
      </>
    )
  }

  const parseScoreToTime = (score) => {
    switch (score) {
      case 1:
        return 'A couple hours'
      case 2:
        return 'One full day'
      case 3:
        return 'A couple days'
      case 5:
        return 'One full week'
      case 8:
        return 'Two weeks'
      case 13:
        return 'More than 2 weeks'
      default:
        return '--'
    }
  }

  return (
    <div className={'voters-table-container'}>
      <Button
        variant={'contained'}
        onClick={() => {
          navigator.clipboard.writeText(
            `https://sprint-planner-ui.herokuapp.com/${roomId}`
          )
        }}
        id={'link-copy'}
      >
        Click Here To Copy Room Link
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Uncertainty</TableCell>
              <TableCell align="center">Complexity</TableCell>
              <TableCell align="center">Effort</TableCell>
              <TableCell align="center">Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleUsers().map((user, idx) => {
              const score = countVotes(user.votes, roomId, true)

              return (
                <TableRow
                  key={idx}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell align="center">
                    {parseData(user.votes[0].value)}
                  </TableCell>
                  <TableCell align="center">
                    {parseData(user.votes[1].value)}
                  </TableCell>
                  <TableCell align="center">
                    {parseData(user.votes[2].value)}
                  </TableCell>
                  <TableCell align="center">
                    <Box>{visible ? score : '--'} Points</Box>
                  </TableCell>
                </TableRow>
              )
            })}

            <TableRow>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell>
                <Box>
                  {visible
                    ? parseScoreToTime(countVotes(votes, roomId))
                    : '-- Time'}
                </Box>
              </TableCell>
              <TableCell align="center">
                <VotesScore votes={votes} roomId={roomId} visible={visible} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {isAdmin ? (
        <div className={'admin-buttons-container'}>
          <Button
            variant={'contained'}
            style={{ marginRight: '10px' }}
            onClick={handlePointVisibility}
          >
            {visible ? 'Hide' : 'Reveal'}
          </Button>
          <Button
            variant={'contained'}
            style={{ marginRight: '10px' }}
            onClick={handleResetScores}
          >
            Reset
          </Button>
        </div>
      ) : (
        <div className={'admin-buttons-container'}>
          <Button
            variant={'contained'}
            style={{ marginRight: '10px' }}
            href={`${window.location.href}?admin=true`}
          >
            Become Admin
          </Button>
        </div>
      )}
    </div>
  )
}

VotersTable.propTypes = {
  addUserToList: PropTypes.func.isRequired,
  resetUserVotes: PropTypes.func.isRequired,
  votes: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  votes: state.votes,
})

export default connect(mapStateToProps, { addUserToList, resetUserVotes })(
  VotersTable
)
