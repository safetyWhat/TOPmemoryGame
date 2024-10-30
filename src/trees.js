const images = import.meta.glob('./images/*.{png,jpg,jpeg,svg}');

const imageData = Object.keys(images).map((path) => {
    const fileName = path.split('/').pop().split('.').slice(0, -1).join('.');

    return {
        src: path.replace('./', '/src/'),
        name: fileName,
    };
});

export default imageData;
