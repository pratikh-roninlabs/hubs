export class WindfarmHandler{
    constructor(windfarmobj)
    {
        this.windfarmobj = windfarmobj;
        this.windfarmobj.traverse((child)=>{
            if(child.name === "Rotor10"){
                this.rotator = child;
                this.rotator.matrixAutoUpdate = true;
            }
        });

        //Update logic , later use aframe tick function to update
        setInterval(()=>{
            this.update();
        },1000/40);

        //api calling refresh
        setInterval(()=>{
            refreshApi();
        },5000) 
    } 
    
    update =()=>{
        this.rotator.rotateZ(0.1);
    }

    refreshApi=()=>{

    }
}