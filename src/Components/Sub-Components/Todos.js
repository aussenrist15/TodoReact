import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';

function handleclick(key){
    console.log(key);
}

function Todos (props) {

        console.log(props.todos);
        if(props.todos.length===0) {
            return (
            <div className='margintop'>
                <Typography variant='h1' >
                    No Todos...
                </Typography>
            </div>
            )
        }

       else{

        let a=0;

            let retval = props.todos.map((el)=>{
                console.log(el);
                return <div className='li-container'>
                            <ol key={el.id} onClick={()=>props.deleteTodo(el.id)}>
                                <span className='strike-effect'>    
                                    {el.text}
                                </span>
                            </ol>
                        </div>
                a++;
            })

           return (
            
            
            <ul key={a}>
                {retval}
            </ul>  
           )
       }


}
export default Todos