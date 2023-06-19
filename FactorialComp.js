import React from "react";

class FactorialComp extends React.Component
{   
    
        
    render(){
        let fact=1;
        let i;
        for(i=1;i<=this.props.no;i++)
        {
            fact=fact*i;
        }
        
        return(
            <div>
              <h1>Factorial:{fact}</h1>
            </div>
        )

    }
    
}
export default FactorialComp