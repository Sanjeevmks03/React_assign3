import React, { Component } from 'react'

class DateCac extends Component {
constructor(props) {
    super(props);
    this.state = {
      birthdate: "",
      age: null,
      error_msg:""
    };
  }

  handleChange = (event) => {
    this.setState({ birthdate: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const today = new Date();
    const birthDate = new Date(this.state.birthdate);

    let age_now = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age_now--;
    }

    if(age_now<0){
      this.setState({
        error_msg: "Please enter valid D.O.B",
        age:""
      })
    }
    else{
      this.setState({ age: age_now });
    }
    
  };

  render() {
    return (
      <div>
        <h6 className='mt-4'>Q. Create a class component that renders a date input and a submit button. If you input date of birth
in this input and submit, it should display the calculated age.</h6>
        <form onSubmit={(event)=>this.handleSubmit(event)}>
          <label>
            Enter your date of birth:
            <input
              type="date"
              value={this.state.birthdate}
              onChange={(event)=>this.handleChange(event)}
            />
          </label>
          <button className='btn btn-success' type="submit">Calculate Age</button>
        </form>
        <p>{this.state.age}</p>
        <div className="form-text text-danger">{this.state.error_msg}</div>
        
      </div>
    );
  }
}
export default DateCac