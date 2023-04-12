import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const storedFormData = localStorage.getItem('formData');

        if (storedFormData) {
            setFormData(JSON.parse(storedFormData));
        }
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href ="/call";
        const validationErrors = validateForm(formData);

        if (Object.keys(validationErrors).length === 0) {
            localStorage.setItem('formData', JSON.stringify(formData));
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
        setFormData({
            email: '',
            password: '',
        })

    }

    const validateForm = (data) => {
        let errors = {};

        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        if (!data.email) {
            errors.email = '**Email is required';
        } else if (!isValidEmail(data.email)) {
            errors.email = '**Email is invalid';
        }

        if (!data.password) {
            errors.password = '**Password is required';
        } else if (data.password.length < 8) {
            errors.password = '**Password must be at least 8 characters';
        }

        return errors;
    }

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }


    return (
        <>
            
                <form  onSubmit={handleSubmit} >           
                    <div className='container'>
                        <div className="mb-3 mt-5">
                            {/* <label htmlfor="exampleInputEmail1" className="form-label">Email address</label> */}
                            <input type="email" name="email" className="form-control" value={formData.email} id="exampleInputEmail1" onChange={handleInputChange} placeholder='email' />
                            {<span style={{ color: "red" }}>{errors.email}</span>}
                        </div>
                        <div className="mb-3">
                            {/* <label htmlfor="exampleInputPassword1" className="form-label">Password</label> */}
                            <input type="password" className="form-control" name="password" value={formData.password} id="exampleInputPassword1" onChange={handleInputChange} placeholder='password' />
                            {<span style={{ color: "red" }}>{errors.password}</span>}

                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
        </>

        // <>
        //     <form onSubmit={handleSubmit}>
        //         <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        //         {errors.email && <span>{errors.email}</span>}

        //         <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        //         {errors.password && <span>{errors.password}</span>}

        //         <button type="submit">Submit</button>
        //     </form>

        // </>
    )
}

export default Login