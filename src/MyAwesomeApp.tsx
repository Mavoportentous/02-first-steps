import { useState } from "react";
import type { CSSProperties } from "react";
const firstName = 'Miguel Angel';
const LastName = 'Valenzuela Ortiz';
const favoriteGames = ['League of Legends', 'Control', 'Stronghold Crusader', 'Streonghold', 'Age of Mithology', 'Ades'];
let isActive = true;//los valores boleanos no generan código interno en react
const addres = {
    zipCode: '54870',
    country: 'México'
}


export const MyFunctionClick = () => {

    if (isActive === true) { isActive = false }
    else {
        isActive = true
    }
    console.log("desdeMyFunctionClick " + isActive);
};

export const MyAwesomeApp = () => {
    //Echo con ayuda de Gemini 2.5 Flash
    // 1. Usa useState para crear una variable de estado y su función de actualización
    const [isActive, setIsActive] = useState(true);

    // 2. Define la función de alternancia dentro del componente
    const toggleActive = () => {
        // Usa el setter para actualizar el estado al valor opuesto
        // React detecta este cambio y re-renderiza el componente
        setIsActive(!isActive);
        console.log("El nuevo estado es: " + !isActive);
    };

    // 3. Define los estilos, ya que dependen del estado 'isActive'
    const styles: CSSProperties = {
        // Nota: El formato hexadecimal de 4 dígitos es #RGBA. 
        // Si quieres un blanco, usa '#FFFF' o 'white'. Asumo que buscabas 'rgba(250, 250, 250, 1)'
        backgroundColor: isActive ? '#FAFAFA' : 'red',
        borderRadius: 20,
        padding: 10,
        borderColor: 'blue'
    };


    return (
        <div data-testid="div-app">
            <h1 data-testid='first-name-title'>{firstName}</h1>
            <h3>{LastName}</h3>
            <p>{favoriteGames.join(', ')}</p>

            {/* Renderizado condicional basado en el estado */}
            <h1 data-testid='h1-active-desactive'>{isActive ? 'Activo ✅' : 'No activo ❌'}</h1>

            <p>{addres.country + ' ' + addres.zipCode}</p>

            <p style={styles}>{JSON.stringify(addres)}</p>

            {/* 4. Asigna la función de alternancia al evento onClick. 
                 ¡Importante! Se pasa la referencia sin paréntesis. */}
            <button onClick={toggleActive}>
                Activar | Desactivar
            </button>
        </div>
    );
};
// export function MyAwesomeApp() {
//     return (
//         <>
//             <h1>Miguel</h1>
//             <h3>Valenzuela</h3>
//         </>
//     );

// }