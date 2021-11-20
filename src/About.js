import homi from "./assets/about.json"
function  About(){
    return (<div>

        <h1> about</h1>
        {homi.map((hom)=><h1> {hom.title} <br/> {hom.content}</h1>)}

        </div>);


}

export default About;