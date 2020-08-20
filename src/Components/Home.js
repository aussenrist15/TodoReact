import React from 'react'
import Grid from '@material-ui/core/Grid';
import Todos from './Sub-Components/Todos'
import Input from './Sub-Components/Input'




let idd=0;

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            todos: []
          }
    }

    addTodo = (text)=> {
        this.setState ({
                
          todos : [...this.state.todos , {text:text , id: ++idd }]    
          
        })
        
        console.log(this.state.todos)
    
      }

      deleteTodo = (id)=> {
        let temp = [...this.state.todos];
        let fin = temp.filter(ele=> {
          if(ele.id!=id) 
            return ele;
        })
        console.log(fin);
        this.setState ({
          todos: fin
        })
    
      }

      render() {
        return (
         <div>
            
      
            <Grid container justify = "center">
              <Todos todos= {this.state.todos} deleteTodo= {this.deleteTodo} / >
            </Grid>
      
            <Grid container justify = "center">
              <Input addTodo = {this.addTodo} />
            </Grid>
            
            
            
         </div>
        );
      }

    
    
}

export default Home;

