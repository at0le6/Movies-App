import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Table} from 'react-bootstrap'
import { getAllByAltText } from '@testing-library/react';

function EpisodesShow() {
  const Episodes=useSelector(state=>state.infoShow);
  return (
    <div>
      {Episodes.season.map(e=>(
        <div key={e.number+"EpisodeShow"}>
          <h3 className='my-1'>Season {e.number}</h3>
        <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Number</th>
            <th>Date</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {Episodes.episodes.filter(i=>e.number===i.season).map((j,index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{j.airdate}</td>
            <td>{j.name}</td>
            <td>{j.rating?.average||"No Score"}</td>
          </tr>
          )).reverse()}
        </tbody>
        </Table>
        </div>
      )).reverse()}
    </div>
  )
}

export default EpisodesShow