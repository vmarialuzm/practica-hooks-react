import { useForm } from "../hooks/useForm"

export const FormularioComponent = () => {
    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }
    const { formState, userName, email, password, onInputChange} = useForm(initialForm)
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }

  return (
    <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="userName">Username</label>
            <input 
                type="text" 
                className="form-control" 
                name="userName"
                placeholder="Enter your username"
                value={userName}
                onChange={onInputChange}
            />

        </div>
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input 
                type="email" 
                className="form-control" 
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={onInputChange}
            />

        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                className="form-control" 
                name="password"
                placeholder="Password"
                value={password}
                onChange={onInputChange}
            />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
