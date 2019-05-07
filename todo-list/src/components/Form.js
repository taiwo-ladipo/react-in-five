import React from 'react';

function Form(props) {
    return (
        <div className='profile'>
            <h1 className=''>Contact Form</h1>
            <form onSubmit="">
                <input
                    type="text"
                    placeholder='First Name'
                    name='firstName'
                    className='form-control'
                    onChange={props.handleFormData}
                /><br/>
                <input
                    type="text"
                    placeholder='Last Name'
                    name='lastName'
                    className='form-control'
                    onChange={props.handleFormData}
                /><br/>
                <textarea name="message" id="" cols="30" rows="10" className='form-control'/><br/>

                <label htmlFor="subscribe">
                    <input
                        type="checkbox"
                        id='subscribe'
                        name='subscribe'
                        checked={props.subscribe}
                        onChange={props.handleFormData}
                    /> Subscribe to newsletter
                </label>
                <br/>

                <label htmlFor="male">
                    <input
                        type="radio"
                        id='male'
                        name='gender'
                        onChange={props.handleFormData}
                    /> Male
                </label>

                <label htmlFor="female">
                    <input
                        type="radio"
                        id='female'
                        name='gender'
                        onChange={props.handleFormData}
                    /> Female
                </label>
                <br/>

                <label htmlFor="howLong">
                    How long have you been using this site?
                </label>
                <select
                    id='howLong'
                    name='howLong'
                    onChange={props.handleFormData}
                    className='form-control'
                >
                    <option value='1'>1 year</option>
                    <option value='2'>2 years</option>
                    <option value='3'>3 years</option>
                    <option value='4'>4 years</option>
                </select>

                <br/>

                <label htmlFor="isVegan">
                    <input
                        name="dietaryRestrictions"
                        type="checkbox"
                        id='isVegan'
                        onChange={props.handleFormData}
                        checked={props.dietaryRestrictions.isVegan}
                    /> Vegan?
                </label>
                <br/>

                <label htmlFor="isKosher">
                    <input
                        name="dietaryRestrictions"
                        type="checkbox"
                        id='isKosher'
                        onChange={props.handleFormData}
                        checked={props.dietaryRestrictions.isKosher}
                    /> Kosher?
                </label>
                <br/>

                <label htmlFor="isLactoseFree">
                    <input
                        name="dietaryRestrictions"
                        type="checkbox"
                        id='isLactoseFree'
                        onChange={props.handleFormData}
                        checked={props.dietaryRestrictions.isLactoseFree}
                    /> Lactose Free?
                </label>
                <br/>

                <h5 className='text-danger'>{props.firstName} {props.lastName}</h5>
            </form>
        </div>
    )
}

export default Form;