import { useState } from "react";
import "../App.css";
import { Remage } from "../components/remage";
import { CardInteract } from "../interacts/card";

export const SevenWonders = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div>
        <Remage
          src="base-img.png"
          interactables={[
            CardInteract({
              left: "21.7%",
              top: "47%",
              heading: "Chichen Itza, Mexico",
              description:
                "The Chichen Itza is a large pre-Columbian city built by the Maya people.",
              imageSrc:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/220px-Chichen_Itza_3.jpg",
              tags: "Chichen Itza Mexico",
            }),
            CardInteract({
              left: "26.4%",
              top: "68%",
              heading: "Macchu Pichu, Peru",
              description:
                "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley",
              imageSrc:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/270px-Machu_Picchu%2C_Peru.jpg",
              tags: "Macchu Pichu Peru",
            }),
            CardInteract({
              left: "34.3%",
              top: "73.1%",
              heading: "Christ the Redeemer, Brazil",
              description:
                "Christ The Redeemer is an Art Deco statue of Jesus Christ created by French sculptor Paul Landowski",
              imageSrc:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Christ_the_Redeemer_-_Cristo_Redentor.jpg/220px-Christ_the_Redeemer_-_Cristo_Redentor.jpg",
              tags: "Christ the Redeemer, Brazil",
            }),
            CardInteract({
              left: "49.7%",
              top: "32.3%",
              heading: "Colloseum, Italy",
              description:
                "The Colosseum is an elliptical amphitheatre in the centre of the city of Rome, Italy.",
              imageSrc:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/270px-Colosseo_2020.jpg",
              tags: "Colloseum, Italy",
            }),
            CardInteract({
              left: "56%",
              top: "40.5%",
              heading: "Petra, Jordan",
              description:
                'Petra is a historic and archaeological city in southern Jordan. Famous for its rock-cut architecture and water conduit system, Petra is also called the "Rose City" because of the colour of the stone from which it is carved',
              imageSrc:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Treasury_petra_crop.jpeg/200px-Treasury_petra_crop.jpeg",
              tags: "Petra, Jordan",
            }),
            CardInteract({
              left: "68%",
              top: "44.4%",
              heading: "Taj Mahal, India",
              description:
                "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal.",
              imageSrc:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/250px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg",
              tags: "Taj Mahal, India",
            }),
            CardInteract({
              left: "78.3%",
              top: "33.5%",
              heading: "Great Wall of China, China",
              description:
                "The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection.",
              imageSrc:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/250px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
              tags: "Great Wall of China, China",
            }),
          ].filter((intr) =>
            intr.tags.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )}
        />
        <input
          className="p-1 rounded-md px-2"
          placeholder="Search Seven Wonders..."
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
};
