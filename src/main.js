import React from 'react';
import { Link } from 'react-router-dom';

function main(){
    return(
        <div>
        <div>main</div>
            <Link to ='/hobbytest'><button style={{height: '30px', margin: '20px'}}>hobbytest</button></Link>
            <Link to ='/schedule'><button style={{height: '30px', margin: '20px'}}>schedule</button></Link>
            <Link to ='/reviewPage'><button style={{height: '30px', margin: '20px'}}>reviewPage</button></Link>
        </div>
    )
}

export default main;