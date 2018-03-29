import React from 'react'
import AddStudentForm from "./AddStudentForm.js";
import StudentList from './StudentList.js';
import ViewClassStatistics from './ViewClassStatistics.js';

const Home = (props) => (
  <div className="container">
    <div className="box">
      <AddStudentForm />
    </div>
    <ViewClassStatistics />
    <StudentList />
  </div>
);

export default Home;