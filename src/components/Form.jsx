import {useState} from 'react'

const Form = () => {

    const [showForm, setShowForm] = useState(false);
    const openForm = () => {
        setShowForm(true);
        setMenu(false);
      };
    
      const closeForm = () => {
        setShowForm(false);
      };

  return (
    

    <div>
      
    </div>
  )
}

export default Form
