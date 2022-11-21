import { useOutletContext, useParams, useNavigate } from "react-router-dom";

const DeleteRoutine = ({routine}) => {
  const [routines, setRoutines] = useOutletContext();
  const navigate = useNavigate();
  const {id} = useParams();

  async function deleteThisRoutine () {
    try {
      const response = await fetch (`https://fitnesstrac-kr.herokuapp.com/api/routines/${id}`, 
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
      const deleteData = await response.json();
      console.log("delete data: ", deleteData);
      const newResponse = await fetch ('https://fitnesstrac-kr.herokuapp.com/api/routines')
      const newRoutines = await newResponse.json();
      setRoutines(newRoutines);
      navigate('/routines')
    } catch (error) {
      console.log('error:', error)
    }
  }

  return (
    <div>
      <button onClick={(event) => {
        event.preventDefault()
        deleteThisRoutine(id)}}>
        Delete Routine
      </button>
        {/* when it is time to use this on RoutineDetails, use below: */}
      {/* <RoutineDelete routine={routineObj} /> */}
    </div>
  )
}

export default DeleteRoutine;