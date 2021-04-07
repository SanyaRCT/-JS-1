const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('#gallery');
galleryEl.style.display = 'flex';
galleryEl.style.listStyle = 'none';

images.forEach(image => {
    // const imgEl = document.createElement('img')
    // imgEl.src = image.url;
    // imgEl.alt = image.alt;
    // imgEl.width = 400;
    // imgEl.height = 400;

    const liItem = document.createElement('li');
    liItem.classList.add('item');
    liItem.style.marginRight = '5px'
    liItem.insertAdjacentHTML(afterbegin, `<img src = ${images.url}, alt = ${images.alt}>`);

    galleryEl.append(liItem);
})
const liItem = document.createElement('li');
    // liItem.classList.add('item');
    // liItem.style.marginRight = '5px'
galleryEl.insertAdjacentHTML('afterbegin', '`<img src = ${images.url}, alt = ${images.alt}>`');
    galleryEl.append(liItem);
// `<img src = ${images.url}, alt = ${images.alt}>`