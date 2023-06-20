import Trick from './Trick.js'

const Viewer= ({count}) =>{

    return(
        <div>
            <h3>현재 카운트 :</h3>
            <h2>{Trick(count)}</h2>

        </div>
    )
}

export default Viewer;