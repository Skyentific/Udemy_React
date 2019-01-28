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
    const WithClass = class extends Component {
        render() {
            return (
                <div className = {className}>
                {/* pass on the props  */}
                    <WrapedComponent ref={this.props.forwardRef} {...this.props}/>  
                
                </div>
            )
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardRef={ref}/>;
    })
}


export default withClass;