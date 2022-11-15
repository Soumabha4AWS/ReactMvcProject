import React from 'react';
import {useLocation, useHistory} from "react-router-dom";
import axios from 'axios'
import './Confirm.css';



const Confirm = () => { 

        const location = useLocation();
        const history  = useHistory();

        console.log(location.state);

        const onSubmit = async (event) => {      
          event.preventDefault();

          console.log('onSubmit Handler');
          
          if (location.state.headerValue === 'Form to confirm courses before adding it' && location.state.paragraphValue === 'Confirm the Courses that is going to be added') { 
            console.log('Post Method Called');
            await axios.post("http://localhost:8084/SpringBootRestApiMySql/post" , location.state.course);
            history.push('/reactMvcProject/get/viewAllCourses');
          }

          if (location.state.headerValue === 'Form to confirm courses before editing it' && location.state.paragraphValue === 'Confirm the Courses that is going to be edited') { 
          console.log('Put Method Called');
          await axios.put("http://localhost:8084/SpringBootRestApiMySql/put/"+location.state.id , location.state.course);
          history.push('/reactMvcProject/get/viewAllCourses');
          }

          if (location.state.headerValue === 'Form to confirm courses before removing it' && location.state.paragraphValue === 'Confirm the Courses that is going to be removed') { 
            console.log('Delete Method Called');
            await axios.delete
            ("http://localhost:8084/SpringBootRestApiMySql/delete/"+location.state.id);
            history.push('/reactMvcProject/get/viewAllCourses');
            }          
 
        };

        

        return (
              <div className="container h-100">
              <div className="row h-100 justify-content-center align-items-center">
                <div className="col-10 col-md-8 col-lg-6">              
                                                  
                <h4>{location.state.headerValue}</h4>
                  <p className="description">{location.state.paragraphValue}</p>
                    <form onSubmit ={ (event) => onSubmit(event) }> 
                      <table className="table table-sm table-dark">
                          <thead>
                            <tr>
                                <th scope="col">Label</th>
                                <th scope="col">Value</th>
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <td className="bg-primary"><label>Id</label></td>
                              <td className="bg-success"><input type="text" name="id" id="id" value={location.state.id} readOnly/></td>
                          </tr>
                          <tr>
                              <td className="bg-primary"><label>Course Name</label></td>
                              <td className="bg-success"><input type="text" name="courseName" id="courseName" value={location.state.courseName} readOnly/></td>
                          </tr> 
                          <tr>
                              <td className="bg-primary"><label>Rating</label></td>
                              <td className="bg-success"><input type="text" name="rating" id="rating" value={location.state.rating} readOnly/></td>
                          </tr>                          
                          <tr>
                              <td className="bg-primary"><label>Price</label></td>
                              <td className="bg-success"><input type="text" name="price" id="price" value={location.state.price} readOnly/></td>
                          </tr>                          
                          <tr>
                              <td className="bg-primary"><label>Trainer Name</label></td>
                              <td className="bg-success"><input type="text" name="trainerName" id="trainerName" value={location.state.trainerName} readOnly/></td>
                          </tr>                          
                          <tr>
                              <td className="bg-primary"><label>Number of Days</label></td>
                              <td className="bg-success"><input type="text" name="numberOfDays" id="numberOfDays" value={location.state.numberOfDays} readOnly/></td>
                          </tr>                          
                          <tr>
                            <td colSpan="2" style={{textAlign:"center"}}><button type="submit" className="btn btn-danger">Confirm</button></td>
                          </tr>                          
                        </tbody>
                      </table>                  
                    </form>               
                </div>
              </div>
          </div>
 
        )
      
    
};

export default Confirm;

    

