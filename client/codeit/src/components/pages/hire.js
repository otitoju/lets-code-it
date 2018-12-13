import React, { Component } from 'react'

export default class hire extends Component {
  render() {
    return (
      <div>
        <form action="">
          <div class="form-container">
            <div class="hire-text">
              <strong class="textHead">We have young and bright developers<br/> 
              Hire us let's get them to you in days</strong>
            </div>
            <label><b>First Name:</b></label>
            <input type="text" placeholder="Enter your first name" name="fname" required/>
            
            <label><b>Last Name:</b></label>
            <input type="text" placeholder="Enter your last" name="lname" required/>
              
            <label><b>Company Name:</b></label>
            <input type="text" placeholder="enter your company name" name="cname" required/>

            <label><b>Email:</b></label>
            <input type="text" placeholder="Enter e-mail address" name="email" required/>

            <label><b>Contact Number:</b></label>
            <input type="number" placeholder="enter phone number" name="phone" required/>

            <label><b>Country:</b></label>
            <input type="text" placeholder="enter country" name="country" required/>

            <label><b>Other Details You want us to know:</b></label>
            <textarea name="explanation" id="" cols="35" rows="5"></textarea><br/>

            <div class="privacy-policy">
              Here's Our hiring <a href="">privacy Policy</a>
            </div> 

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}