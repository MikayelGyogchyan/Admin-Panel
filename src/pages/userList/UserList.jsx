
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { userRows } from "../../dummyData.js";
import { Link } from 'react-router-dom';
import { useState } from 'react'


export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90},
    { field: 'user', headerName: 'Usuario', width: 200, renderCell: (params) => {
      return (
        <div className='userListUser'>
          <img className='userNameImg' src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      )
    }},
    { field: 'email', headerName: 'Correo', width: 200 },
    { field: 'status', headerName: 'Estado', width: 120},
    { field: 'transaction', headerName: 'Volumen de transacciones', width: 160},
    { field: 'action', headerName: 'Acción', width: 150, renderCell: (params)=> {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Editar</button>
            </Link>
            <DeleteOutline className="userListDelete" onclick={() => handleDelete(params.row.id)}/>
          </> 
        );
      },
    },
  ];

  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
