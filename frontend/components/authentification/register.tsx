import { useState } from "react"



export default function registrationForm() {
    // decalre my hooks:
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        dateOfBirth: "",
        avatar: null,
        nickname: "",
        aboutMe: "",
    })

    // create a function to handle the change of the form inputs:
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const {name, value, type} = e.target
            if (type === 'file'){
                const input = e.target as HTMLInputElement
                setFormData({
                    ...formData,
                    [name]: input.files ? input.files[0] : null
                })
            }else {
                setFormData({
                    ...formData,
                    [name]: value
                })
            }
    }

    // craete a function to submit the form data:
    const handleSubmit = () => {
    if(!formData.firstName )
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="pasword"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
                required
            />

            <input
                type="date"
                name="dateOfBirth"
                placeholder="Last name"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
            />

            <input
                type="file"
                name="avatar"
                onChange={handleChange}
                placeholder="Avatar (optional)"
                accept="image/*"
            />

            <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            required={false}
            placeholder="nickname (optional)"
            />

            <textarea
            name="aboutMe"
            placeholder="About me (optional)"
            value={formData.aboutMe}
            onChange={handleChange}
            rows={4}
            cols={50}
             />
            <button
                type="submit"
            >
                submit
            </button>
        </form>
    )
}