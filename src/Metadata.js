import React from 'react'

const Metadata = (props) =>{
    return(
<div className = "Metadata">
<div>
{props.message.user.displayName}
    </div>

    <div>
        1:10 PM
        </div>
</div>
    )
}

export default Metadata

