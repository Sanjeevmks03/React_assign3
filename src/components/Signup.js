import React, { Component } from 'react'

class Signup extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {

  //     disabled: true,
  //     username: "",
  //     password: "",
  //     confirm_password: "",
  //     password_error: "",
  //     cpassword_error: "",
  //     username_error: ""

  //   }
  // }


  // handleClick = (e) => {
  //   e.preventDefault()
  //   let pass_error = ""
  //   let cpass_error = ""
  //   let pass = this.state.password
  //   let cpass = this.state.confirm_password
  //   let user_error=""
  //   if(this.state.username.length===0){
  //     user_error+="Username should not be empty"
  //   }
  //   if (pass.length < 8) {
  //     pass_error += "Password should be greater than 8 characters"
  //   }
  //   if (pass !== cpass) {
  //     cpass_error += "Password doesn't match"
  //   }
  //   let cap = pass.length - pass.replace(/[A-Z]/g, '').length
  //   let small = pass.length - pass.replace(/[a-z]/g, '').length

  //   if (cap < 1) {
  //     pass_error += "One capital letter should be present"
  //   }
  //   if (small < 1) {
  //     pass_error += "One small letter should be present"
  //   }

  //   this.setState({
  //     password_error: pass_error,
  //     cpassword_error:cpass_error,
  //     username_error:user_error
  //   }, () => {
  //     if (user_error!=="" || pass_error !== "" || cpass_error !== "") e.preventDefault()
  //   })
  // }


  // checkusername = (e) => {
  //   e.preventDefault()
  //   this.setState({
  //     username: this.target.value
  //   }, this.checksubmit)
  // }

  // checkuserpassword = (e) => {
  //   e.preventDefault()
  //   this.setState({
  //     password: e.target.value
  //   }, this.checksubmit)
  // }

  // check_confirm_password = (e) => {
  //   e.preventDefault()
  //   this.setState({
  //     confirm_password: e.target.value
  //   }, this.checksubmit)
  // }

  // checksubmit = () => {
  //   if (this.state.password !== "" && this.state.confirm_password!== "" && this.state.username !== "") {
  //     this.setState({
  //       disabled: true
  //     })
  //   }
  // }

  constructor() {
    super()

    this.state = {
        username: "",
        password: "",
        password_error: "",
        confirm_password: "",
        confirm_password_error: "",
        disabled: "disabled",
    }
}

check_username = (e) => {
    this.setState({
        username: e.target.value
    }, this.check_submit)
}

check_password = (e) => {
    this.setState({
        password: e.target.value
    }, this.check_submit)
}

check_confirm_password = (e) => {
    this.setState({
        confirm_password: e.target.value
    }, this.check_submit)
}

check_submit = () => {
  // console.log("insidebuttonfunc")
    if (this.state.username !== "" && this.state.password !== "" && this.state.confirm_password !== "") {
      // console.log("before:-"+this.state.disabled)
        this.setState({
            disabled: ""
        })
        // console.log("after:-"+this.state.disabled)
    }
}

onsubmit = (e) => {
  let conf_pass_error = ""
  let pass_error = ""
  let pass = this.state.password
  let cpass = this.state.confirm_password
  let upper = pass.length - pass.replace(/[A-Z]/g, '').length
  let lower = pass.length - pass.replace(/[a-z]/g, '').length


  if (pass.length < 8){
    pass_error += "Password should be greater than 8 characters."
  } 
  if (upper<1){
    pass_error += "Password must have a capital letter."
  }
  if (lower<1){
    pass_error += "Password must have a small letter."
  }
  if (pass!==cpass){
    conf_pass_error += "Password not matching."
  }
  


  this.setState({
      password_error: pass_error,
      confirm_password_error: conf_pass_error
  }, () => {
      if(pass_error !== "" || conf_pass_error !== "") 
      {
        e.preventDefault()
      }
  })
}
  render() {
    return (
      <div>
      <h6>Q. Create a class component that renders a sign-up form. Username input, Password input, Confirm
      Password input and a Submit button. The submit button is disabled if the fields are empty. On
      submit, the password must contain at least 8 characters, at least one capital letter and at least one
      small letter and the passwords must match. Any invalid entry of password should be shown as error
      with user-readable message.</h6>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-4 border-0 '>
            <form className='border p-3 mt-3' onSubmit={(e) => this.onsubmit(e)}>
              <div className="form-group ">
                <label>Username: </label>
                <input type="text" value={this.state.username} class="form-control" onChange={(e) => this.check_username(e)} />
              </div>
              <div className="form-group">
                <label>Password: </label>
                <input type="password" value={this.state.password} class="form-control" onChange={(e) => this.check_password(e)} />
                <div className="form-text text-danger">{this.state.password_error}</div>
              </div>
              <div className="form-group">
                <label>Confirm Password: </label>
                <input type="text" class="form-control" value={this.state.confirm_password} onChange={(e)=>this.check_confirm_password(e)}/>
                <div className="form-text text-danger">{this.state.confirm_password_error}</div>
              </div>
              <button type="submit" class="btn btn-primary mt-3" disabled={this.state.disabled} >submit</button>
            </form>
          </div>
        </div>

      </div>
      </div>
    )
  }
}

export default Signup