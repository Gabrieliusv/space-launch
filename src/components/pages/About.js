import React, { Component } from 'react'

class About extends Component{

    render(){

        return(
            
            <div className="container mt-4">
            <h1 className="text-center">About</h1>
            <div className="row m-3 p-2">
            
                <p className="col">
                <img className="float-left" src="./rocket.png" alt="Rocket" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dolor ac elit consectetur vehicula. Proin lectus felis, convallis et vestibulum ut, venenatis eget nibh. Curabitur mollis libero in mi tempus pellentesque. Aliquam erat volutpat. Duis euismod ante sapien, lacinia rutrum urna accumsan id. Nullam eros magna, consequat vel nunc quis, dictum aliquam dolor. Nam quis maximus tellus. Morbi luctus tortor ut lorem fermentum, id ultricies arcu lobortis.

Nunc tincidunt magna quis imperdiet tempus. Aliquam hendrerit aliquet tempor. Cras eu urna ac felis efficitur rhoncus. Curabitur tortor est, luctus id mauris eget, maximus convallis sem. Aliquam sit amet finibus tortor. Vivamus leo dui, convallis vitae luctus eget, feugiat et diam. Donec quis mi condimentum, dapibus mi sit amet, consequat odio. Maecenas quis diam ut nibh condimentum rhoncus id cursus erat. Curabitur placerat risus leo, cursus egestas velit faucibus vitae. Suspendisse vehicula feugiat ante vel malesuada. Phasellus id arcu auctor, condimentum mauris a, tempor ante. Nulla facilisi. Nam aliquam dictum nisl, ac vulputate lacus convallis sit amet.

In laoreet lobortis augue. Suspendisse posuere bibendum enim, id lacinia sapien tincidunt vitae. 
                </p>
            </div>
            </div>
            
        )
    }
}

export default About