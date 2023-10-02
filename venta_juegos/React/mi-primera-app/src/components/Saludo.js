import React from "react";

export default function Saludo(props){
    const {userInfo, SaludarFn} = props;
    const {nombre = 'Anonimo', edad= 'tiene n edad', color='Sin color'}  = userInfo;
    console.log(props);
    console.log(userInfo);

    return(
        <div>
            <button onClick={() => SaludarFn(nombre, edad, color)}>
                Saludo huroñil
            </button>
        </div>
    );
}