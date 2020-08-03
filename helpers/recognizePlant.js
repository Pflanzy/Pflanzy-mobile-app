import { showMessage } from 'react-native-flash-message';
import plants from '../data/data.json';

const recognizePlant = async (photo, navigation, setProcessing, stuck) => {
  const localUri = photo.uri;
  const filename = localUri.split('/').pop();

  // Infer the type of the image
  const match = /\.(\w+)$/.exec(filename);
  const imageType = match ? `image/${match[1]}` : `image`;

  // Upload the image using the fetch and FormData APIs
  const formData = new FormData();
  // Assume "photo" is the name of the form field the server expects
  formData.append('organs', 'flower');
  formData.append('images', { uri: localUri, name: filename, type: imageType });
  try {
    const data = await fetch(
      'https://my-api.plantnet.org/v2/identify/all?api-key=2a10M6Omnnm5LOhRgHN9aqGu',
      {
        method: 'POST',
        body: formData,
        headers: {
          'content-type': 'multipart/form-data',
        },
      }
    ).then((res) => res.json());

    const scientificName = data?.results[0]?.species?.genus?.scientificNameWithoutAuthor;
    const targetPlant = plants.find(
      (plant1) =>
        plant1?.scientificName.includes(scientificName) ||
        scientificName.includes(plant1?.scientificName)
    );
    console.log(targetPlant);
    if (targetPlant) {
      navigation.navigate('IndividualPlant', { element: targetPlant });
      setProcessing(false);
    } else if (!targetPlant || stuck) {
      setProcessing(false);
      showMessage({
        message: 'Plant could not be found',
        description: 'Please try another plant',
        type: 'danger',
        animated: true,
        icon: 'danger',
      });
    }
  } catch (e) {
    setProcessing(false);
    showMessage({
      message: 'Plant could not be found',
      description: 'Please try another plant',
      type: 'danger',
      animated: true,
      icon: 'danger',
    });
  }
};

export default recognizePlant;
