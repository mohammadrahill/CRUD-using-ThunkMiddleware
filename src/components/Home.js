import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createUser, editUser } from '../store/userSlice';
import { getList } from '../store/userSlice';



const Home = () => {



    let initialValues = {};
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();


    const { user: alluser } = useSelector((state) => state.users);

    const [user, setUser] = useState(initialValues);


    useEffect(() => {
        if (id !== undefined) {
            const myUser = alluser.filter((ele) => ele.id === id)
            setUser(myUser[0]);
        }
        dispatch(getList());
    }, [])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id === undefined) {
            dispatch(createUser(user))
        } else {
            dispatch(editUser(user))
        }
        navigate('/list')
    }


    return (
        <form className='container' onSubmit={handleSubmit}>
            <input
                className='input'
                type='text'
                placeholder='First name'
                name='fname'
                defaultValue={user.fname}
                onChange={handleChange}
            />

            <input
                className='input'
                type='text'
                placeholder='last name'
                name='lname'
                defaultValue={user.lname}
                onChange={handleChange}
            />

            <input
                className='input'
                type='text'
                placeholder='Email'
                name='email'
                defaultValue={user.email}
                onChange={handleChange}
            />

            <input
                className='input'
                type='text'
                placeholder='Mobile No'
                name='mobile'
                defaultValue={user.mobile}
                onChange={handleChange}
            />

            <input
                className='input'
                type='password'
                placeholder='Password'
                name='pass'
                defaultValue={user.pass}
                onChange={handleChange}
            />
            <button className='btn' onClick={handleSubmit}>Submit</button>
        </form>
    );
};

export default Home;