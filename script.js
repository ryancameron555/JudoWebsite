/** @format */

const imageDetails = [
  {
    filename: 'ippon.gif',
    title: 'Ippon-seoi-nage',
    translation: 'One-arm shoulder throw',
    style: 'Tachi waza -> Te waza',
  },
  {
    filename: 'osotogari.gif',
    title: 'Osoto-gari',
    translation: 'Large outer reap',
    style: 'Tachi waza -> Ashi waza',
  },
  {
    filename: 'ouchigari.gif',
    title: 'Ouchi-gari',
    translation: 'Large inner reap',
    style: 'Tachi waza -> Ashi waza',
  },
  {
    filename: 'haraigoshi.gif',
    title: 'Harai goshi',
    translation: 'Sweeping hip throw',
    style: 'Tachi waza -> Koshi waza',
  },
  {
    filename: 'tomoenage.gif',
    title: 'Tomoe nage',
    translation: 'Circular throw',
    style: 'Sutemi waza -> Ma sutemi waza',
  },
  {
    filename: 'uchimata.gif',
    title: 'Uchi mata',
    translation: 'Inner thigh wraparound throw',
    style: 'Tachi waza -> Ashi waza',
  },
];

function changeImage() {
  const randomIndex = Math.floor(Math.random() * imageDetails.length);
  const throwImage = document.getElementById('throw-image');
  const throwTitle = document.getElementById('throw-title');
  const throwTranslation = document.getElementById('throw-translation');
  const throwStyle = document.getElementById('throw-style');

  // Get the selected image details
  const selectedImage = imageDetails[randomIndex];

  // Construct the image URL
  const imageUrl = `images/judoImages/Throws/${selectedImage.filename}`;

  // Log the constructed image URL and title for debugging
  console.log('Image URL:', imageUrl);
  console.log('Image Title:', selectedImage.title);

  // Change the image source
  throwImage.src = imageUrl;
  // Update the text content of corresponding h5 elements
  throwTitle.textContent = `Technique name: ${selectedImage.title}`;
  throwTranslation.textContent = `English Translation: ${selectedImage.translation}`;
  throwStyle.textContent = `Style of Fighting: ${selectedImage.style}`;
}
