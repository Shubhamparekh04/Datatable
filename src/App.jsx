import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Form from './components/Form'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Table from './components/Table'
import axios from 'axios'
import { Slide, ToastContainer, toast } from 'react-toastify';

const App = () => {

  const URL = 'http://localhost:3000/users';
  const [userObj, setUserObj] = useState({});
  const [usersList, setUsersList] = useState([]);
  const [isEdit, setIsEdit] = useState(null);
  const navigator = useNavigate();

  useEffect(() => {
    handleFetch();
  }, [])

  const handleFetch = async () => {
    let res = await axios.get(URL);
    setUsersList(res.data);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserObj({ ...userObj, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEdit) {

      await axios.put(`${URL}/${isEdit}`, { ...userObj });
      handleFetch();
      navigator("/table");
      setIsEdit(null);

      toast.success('Updated Successfully...!')
    } else {

      await axios.post(URL, { ...userObj, id: String(Date.now()) })
      toast.success('Created Successfully...!')
    }

    handleFetch();
    setUserObj({});
  }

  const handleDelete = async (id) => {
    await axios.delete(`${URL}/${id}`);
    let updatedList = usersList.filter(user => user.id !== id);
    setUsersList(updatedList);
    toast.warning('Deleted Successfully...!')
  }

  const handleEdit = async (id) => {
    setIsEdit(id);

    let editUserObj = usersList.find(user => user.id === id);
    console.log(editUserObj);
    setUserObj(editUserObj);
    navigator("/");
  }


  return (
    <>
      <Nav />
      <Routes>

        <Route path='/' element={<Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          URL={URL}
          userObj={userObj}
          isEdit={isEdit}
        />} />


        <Route path='/table' element={<Table
          usersList={usersList}
          handleFetch={handleFetch}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />} />
      </Routes>


      {/* TOASTIFY CONTAINER */}

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </>
  )
}

export default App
