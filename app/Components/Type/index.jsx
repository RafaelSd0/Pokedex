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
    ground: "brown",
    ice: "cyan",
    poison: "purple",
    psychic: "pink",
    dark: "black",
    fairy: "lightpink",
    fighting: "orange",
    dragon: "indigo",
    bug: "chartreuse",
    normal: "gray"
  };

  return colors[type.toLowerCase()] || "transparent"; // Default color
}