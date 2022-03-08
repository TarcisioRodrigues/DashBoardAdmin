import './styles.scss'
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@material-ui/icons'
import Image from '../../assets/avatar.jpeg'
import {Link} from 'react-router-dom'
import { rows } from '../../dummyData';
import { useState } from 'react';
export const UserList=()=>{
  const {data,setData}=useState(rows)
  const handleDelete=(id)=>{
    setData(data.filter((item)=>item.id !==id))
  }
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'username',
    headerName: 'Username',
    width: 180,
    editable: true,
    renderCell:(params)=>{
      return(
        <div className='userListItem'>
          <img className='userImg' src={params.row.avatar} alt="avatar" />
          {params.row.username}
        </div>
      )
    }
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 110,
    editable: true,
  },
  {
    field: 'transaction',
    headerName: 'Transaction Volume',
    width: 160,
    editable: true,
  },
  {
    field:'action',
    headerName:'Action',
    width:150,
    renderCell:(params)=>{
      return(
    <>
        <Link to={'/user/'+params.row.id}>      <button className='userListEdit'>Edit </button></Link>
      <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row.id)}  />
    </>
      )
    }
  }

];


return(
  <div className="userList">
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
      </div>
    </div>
)
}