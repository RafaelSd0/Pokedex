

export const typeHandler = (types) => {
  if (types[1]) {
    return (
    <div>
      <p
        style={{ backgroundColor: getColorByType(types[0].type.name) }}
      >
       {types[0].type.name} 
      </p>
      <p
        style={{ backgroundColor: getColorByType(types[1].type.name) }}      
      >
        { types[1].type.name}
      </p>
    </div>)
  }
  return (
  <p
    style={{ backgroundColor: getColorByType(types[0].type.name) }}
  >
   {types[0].type.name} 
  </p>);
};

function getColorByType(type) {
  const colors = {
      electric: "yellow",
      fire: "red",
      water: "blue",
      grass: "green",
      ground: "brown",
      ice: "cyan",
      poison: "purple",
      psychic: "pink",
      dark: "black",
      fairy: "lightpink",
      fighting: "orange",
      dragon: "indigo",
      normal: "gray"
  };

  return colors[type.toLowerCase()] || "transparent"; // Default color
}