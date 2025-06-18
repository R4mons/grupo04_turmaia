import React from "react";

function Main() {
    const backgroundStyle = {
        backgroundImage: "url('https://moewalls.com/wp-content/uploads/2023/02/pokemon-emerald-waterfall-pixel-thumb.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    };

    const textStyle = {
    color: "white",
    marginTop: "20px",
    fontSize: "1.5rem",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    border: "2px solid rgba(255, 255, 255, 0.6)",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
    padding: "15px 25px",
    borderRadius: "10px",
    maxWidth: "1500px",
    textShadow: `
        -1px -1px 0 #000,
         1px -1px 0 #000,
        -1px  1px 0 #000,
         1px  1px 0 #000,
         0px  2px 4px rgba(0, 0, 0, 0.7)
    `
};



    const imageStyle = {
        maxWidth: "80%",
        height: "auto",
    };

    return (
        <div style={backgroundStyle}>
            <img
                src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/492.png"
                alt="Imagem Central"
                style={imageStyle}
            />
            <p style={textStyle}>
                Bem-vindo ao nosso Website! 
            </p>
            <p style={textStyle}>
                Este site foi desenvolvido por Arthur e Bernardo, interaja com a navbar para descobrir mais!
            </p>
        </div>
    );
}

export default Main;