import { faker } from "@faker-js/faker";

const getImage = (): string => faker.image.animals(644, 362, true);
const getType = (): string => faker.animal.type();
const getUrl = (): string => faker.internet.url();
const getText = (): string => faker.lorem.sentence();
const getTitle = (type: string): string => faker.lorem.words(2) + " " + type; // Gera um título genérico
const data = [...new Array(100)].map((item, index) => {
  const type = getType();
  return {
    type,
    id: index + 1,
    url: getUrl(),
    title: getTitle(type),
    description: getText(),
    image: getImage(),
  };
});
export default data;
