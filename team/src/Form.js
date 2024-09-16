import React from "react";

export default function FriendForm(props) {
    const { values, update, submit} = props;

    const onChange = evt => {
        const { name, value } = evt.target.name;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name
                    <input
                        name='name'
                        type='text'
                        placeholder='Enter Name'
                        maxLength='30'
                        value={values.name}
                        onChange={onChange}
                        />
                </label>

                <label>Email
                    <input
                    name="email"
                    type="email"
                    placeholder="EMAIL ME"
                    value={values.email}
                    onChange={onChange}
                  />
                </label>
                <label>Role
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value="">-- Select a Role --</option>
                        <option value="Front End Developer">Front End Developer</option>
                        <option value="Back End Developer">Back End Developer</option>
                        <option value="Full Stack Developer">Full Stack Developer</option>
                        <option value="AI Developer">AI Developer</option>
                        <option value="NFT Developer">NFT Developer</option>
                    </select>
                </label>

                <div className='Submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}