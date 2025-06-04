import React from 'react'


const Form = ({ handleChange, handleSubmit, userObj, isEdit }) => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto p-3">
                        <form method='post' onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" value={userObj.email || ""} className="form-control" id="exampleInputEmail1" name='email' onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={userObj.password || ""} className="form-control" id="exampleInputPassword1" name='password' onChange={handleChange} />
                            </div>
                            {isEdit?<button type="submit" className="btn btn-warning">Update</button>:<button type="submit" className="btn btn-primary">Submit</button>}
                            
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
