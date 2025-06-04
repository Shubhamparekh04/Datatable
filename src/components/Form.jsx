import React from 'react';

const Form = ({ handleChange, handleSubmit, userObj, isEdit }) => {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg rounded-4 border-0">
                        <div className="card-body p-4">
                            <h3 className="text-center mb-4 fw-bold text-primary">
                                {isEdit ? "Update User" : "Register User"}
                            </h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        value={userObj.email || ""}
                                        className="form-control"
                                        id="floatingEmail"
                                        name="email"
                                        onChange={handleChange}
                                        placeholder="Email address"
                                        required
                                    />
                                    <label htmlFor="floatingEmail">Email address</label>
                                </div>

                                <div className="form-floating mb-4">
                                    <input
                                        type="password"
                                        value={userObj.password || ""}
                                        className="form-control"
                                        id="floatingPassword"
                                        name="password"
                                        onChange={handleChange}
                                        placeholder="Password"
                                        required
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>

                                <button type="submit" className={`btn ${isEdit ? "btn-warning" : "btn-primary"} w-100 py-2`}>
                                    {isEdit ? "Update" : "Submit"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
