import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import classnames from "classnames";
import NavBar from '../components/NavBar';
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom"; // Import useNavigate instead of useHistory
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";

const Register = ({ registerUser, errors }) => {
  const navigate = useNavigate(); // Replace useHistory with useNavigate
  const { role } = useParams();
  const [state, setState] = useState({
    first_name:"",
    last_name: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  });

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      first_name: state.first_name,
      last_name: state.last_name,
      email: state.email,
      password: state.password,
      password2: state.password2,
      role: role
    };

    axios
      .post("http://localhost:5000/users/register", newUser)
      .then(res => {
        console.log(res.data);
        navigate(`/login/${role}`); // Use navigate instead of history.push
      })
      .catch(err => setState({ ...state, errors: err.response.data }));
  };

  return (
    <div>
      <NavBar/>
      <div className="auth-wrapper">
        <div className="auth-content container">
          <div className="card">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="card-body">
                  {/* Your form JSX */}
                </div>
              </div>
              <div className="col-md-6 d-none d-md-block">
                {/* Your image JSX */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
