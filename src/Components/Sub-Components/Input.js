import React from 'react'
import Button from '@material-ui/core/Button';


let str = '';
function changeHanle(e) {
    str=document.getElementById('textField').value;
    console.log(str);
}

 function Input(props) {
    return (
        <div className='inputFieldParent'>
            <div className='inputFieldChild'>
                <input className="inputStyle" type="text" 
                    placeholder='Entr a todo'
                    onChange={changeHanle}
                    id='textField'/>
            </div>
            <br></br>
            
            <div className='buttonChild'>
                <Button variant="contained" color="primary" onClick={()=>{
                    let temp = str
                    str=''
                    document.getElementById('textField').value='';

                    props.addTodo(temp)
                }}>
                    Add!
                </Button>
            </div>

        </div>
    )
}

export default Input