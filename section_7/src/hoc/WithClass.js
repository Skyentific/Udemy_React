import React, {Component} from 'react'

// normal cuntion that returns a functional component
// const withClass = (WrapedComponent, className) => {
//     return( props ) => (
//         <div className = {className}>
            
//             {/* pass on the props  */}
//             <WrapedComponent {...props}/>  

//         </div>
//     )
// }

const withClass = (WrapedComponent, className) => {
    return class extends Component {
        render() {
            return (
                <div className = {className}>
                {/* pass on the props  */}
                <WrapedComponent {...this.props}/>  
                
                </div>
            )
        }
    }
}


export default withClass;