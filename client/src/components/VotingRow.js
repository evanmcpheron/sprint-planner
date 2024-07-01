import { Button, TableCell, TableRow } from '@mui/material'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useContext, useState, useEffect } from 'react'
import { SocketContext } from '../context/socket'

const VotingRow = ({ vote, updateVotes, user }) => {
  const socket = useContext(SocketContext)
  const [visible, setVisible] = useState(false)
  const id = user.id

  useEffect(() => {
    socket.on('change-point-visibility', (visibility) => {
      setVisible(visibility)
    })
  }, [socket, visible])

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {vote.category}
      </TableCell>
      <TableCell align="right">
        <Button
          className={'vote-button'}
          variant={
            vote.value === 'N/A' ||
            vote.value === 'EPIC' ||
            vote.value === 'NOT VOTING'
              ? 'contained'
              : 'text'
          }
          size="large"
          disabled={visible}
          color={'primary'}
          onClick={() =>
            updateVotes({ category: vote.category, value: 'N/A', id })
          }
        >
          N/A
        </Button>
      </TableCell>
      <TableCell align="right">
        <Button
          className={'vote-button '}
          variant={vote.value === 'LOW' ? 'contained' : 'text'}
          size="large"
          disabled={visible}
          color={'primary'}
          onClick={() =>
            updateVotes({ category: vote.category, value: 'LOW', id })
          }
        >
          LOW
        </Button>
      </TableCell>
      <TableCell align="right">
        <Button
          className={'vote-button '}
          variant={vote.value === 'MEDIUM' ? 'contained' : 'text'}
          size="large"
          disabled={visible}
          color={'primary'}
          onClick={() =>
            updateVotes({ category: vote.category, value: 'MEDIUM', id })
          }
        >
          MEDIUM
        </Button>
      </TableCell>
      <TableCell align="right">
        <Button
          className={'vote-button '}
          variant={vote.value === 'HIGH' ? 'contained' : 'text'}
          size="large"
          disabled={visible}
          color={'primary'}
          onClick={() =>
            updateVotes({ category: vote.category, value: 'HIGH', id })
          }
        >
          HIGH
        </Button>
      </TableCell>
    </TableRow>
  )
}

VotingRow.propTypes = {
  user: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps, {})(VotingRow)
