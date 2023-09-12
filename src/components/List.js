import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../store/userSlice'
import { deleteUser } from '../store/userSlice'
import { useNavigate } from 'react-router-dom';



const List = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, status} = useSelector(state => state.users);


    useEffect(() => {
        dispatch(getList())
    },[]);

    const handelRemove =(id)=>{
        dispatch(deleteUser(id))
        console.log(id);
    };

    const handleEdit =(id)=>{
      navigate(`/home/${id}`)
        // dispatch(deleteUser(id))
        console.log(id);
    }


    if(status ==="loading"){
        return <h2 style={{ textAlign: 'center', marginTop: '100px'}}>Loading....</h2>
    }

    return (
    <table border='1' className='table'>
        <thead>
            <tr>
                <th>Fisrt Name </th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Password</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {user.map((user) => (
                <tr key={user.id}>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>{user.pass}</td>
                    <td><button className='btn-list' onClick={()=>handleEdit(user.id)}>Edit</button></td>
                    <td><button className='btn-list' onClick={()=>handelRemove(user.id)}>Delete</button></td>
                </tr>
            ))
            }
        </tbody>
    </table>
)
};

export default List;