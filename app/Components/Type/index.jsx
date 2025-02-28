import styles from '@/app/Components/Type/page.module.css'

export const TypeHandler = ({ types }) => {
  if (!types || types.length === 0) return null;

  return (
    <div className={styles.container}>
      {types.map((typeObj, index) => (
        <p className={styles.content} key={index} style={{ backgroundColor: getColorByType(typeObj.type.name) }}>
          {typeObj.type.name}
        </p>
      ))}
    </div>
  );
};

function getColorByType(type) {
  const colors = {
    electric: "yellow",
    fire: "red",
    water: "blue",
    grass: "green",
    ground: "rgb(175, 134, 0)",
    ice: "cyan",
    poison: "purple",
    psychic: "pink",
    dark: "black",
    fairy: "lightpink",
    fighting: "rgb(87, 11, 11)",
    dragon: "indigo",
    bug: "chartreuse",
    rock: "saddlebrown",
    ghost: "rgb(49, 25, 71)",
    flying: "rgb(180, 180, 180)",
    normal: "gray"
  };

  return colors[type] || "transparent";
}